import express, { RequestHandler } from 'express'
import { LabEvent, Patient, ScanEvent, Staff } from '../models'
import { asyncMiddlewareWrapper, userExtractor } from '../utils/middleware'

interface LabUpdateRequestBody {
  tests: JSON[]
  staffId: string
}

const router = express.Router()

router.get('/patients', (async (_req, res, next) => {
  try {
    const patients = await Patient.findAll({
      attributes: {
        exclude: ['username', 'password', 'createdAt', 'updatedAt'],
      },
    })

    res.json(patients)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

router.get('/lab/:id', (async (req, res, next) => {
  const id: string = req.params.id
  try {
    const labEvents = await LabEvent.findAll({
      include: [
        {
          model: Staff,
          as: 'lab_ordered_by',
          attributes: ['name'],
        },
        {
          model: Staff,
          as: 'lab_processed_by',
          attributes: ['name'],
        },
      ],
      where: {
        patientId: id,
      },
    })

    const labEventsTransformed = labEvents.map((visit) => ({
      id: visit.id,
      type: visit.type,
      dateTime: visit.updatedAt,
      comments: visit.comments,
      technicianName: visit.lab_processed_by?.name,
      doctorName: visit.lab_ordered_by?.name, // Handle missing doctor name
      tests: visit.tests,
    }))

    res.json(labEventsTransformed)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

router.get('/scan/:id', (async (req, res, next) => {
  const id: string = req.params.id
  try {
    const scanEvents = await ScanEvent.findAll({
      include: [
        {
          model: Staff,
          as: 'scan_ordered_by',
          attributes: ['name'],
        },
        {
          model: Staff,
          as: 'scan_processed_by',
          attributes: ['name'],
        },
      ],
      where: {
        patientId: id,
      },
    })

    const scanEventsTransformed = scanEvents.map((visit) => ({
      id: visit.id,
      type: visit.type,
      dateTime: visit.updatedAt,
      comments: visit.comments,
      technicianName: visit.scan_processed_by?.name,
      doctorName: visit.scan_ordered_by?.name, // Handle missing doctor name
      images: visit.images,
    }))

    res.json(scanEventsTransformed)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

router.put('/lab/:id', (async (req, res, next) => {
  const { tests, staffId } = req.body as LabUpdateRequestBody

  const id: string = req.params.id
  try {
    const labEvents = await LabEvent.findOne({
      where: {
        id: id,
      },
    })

    console.log(labEvents)

    if (!labEvents) {
      res.status(404).json('event is not found!')
      return
    }
    labEvents.tests = tests

    const processedBy = await Staff.findOne({
      where: {
        id: staffId,
      },
    })

    console.log(processedBy)
    if (processedBy) {
      labEvents.lab_processed_by = processedBy
      await labEvents.save()
      res.status(200)
      return
    }
    next()

    // res.json(labEvents)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

router.get('/patients/:id', (async (req, res, next) => {
  const id: string = req.params.id
  try {
    const patient = await Patient.findOne({
      attributes: {
        exclude: ['username', 'password', 'createdAt', 'updatedAt'],
      },
      where: { id: id },
    })

    if (!patient) {
      res.status(404).json({ error: 'user not found' })
      return
    }

    res.json(patient)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

router.post('/', asyncMiddlewareWrapper(userExtractor), (async (
  _req,
  res,
  next
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newTest = await LabEvent.create(_req.body)
    res.send(newTest)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

export default router
