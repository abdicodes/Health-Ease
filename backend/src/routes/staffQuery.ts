import express, { RequestHandler } from 'express'
import {
  LabEvent,
  Patient,
  ScanEvent,
  Staff,
  PrescriptionEvent,
} from '../models'
import { asyncMiddlewareWrapper, userExtractor } from '../utils/middleware'

interface LabUpdateRequestBody {
  tests: JSON[]
  staffId: string
  comments?: string
}

interface ScanUpdateRequestBody {
  images: JSON[]
  staffId: string
  comments: string
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

router.get('/patients/admitted', (async (_req, res, next) => {
  try {
    const patients = await Patient.findAll({
      attributes: {
        exclude: ['username', 'password', 'createdAt', 'updatedAt'],
      },
      where: {
        isAdmitted: true,
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

router.get('/prescription/:id', (async (req, res, next) => {
  const id: string = req.params.id
  try {
    const prescriptionEvents = await PrescriptionEvent.findAll({
      include: [
        {
          model: Staff,
          as: 'prescription_ordered_by',
          attributes: ['name'],
        },
        {
          model: Staff,
          as: 'prescription_processed_by',
          attributes: ['name'],
        },
      ],
      where: {
        patientId: id,
      },
    })

    const prescriptionEventsTransformed = prescriptionEvents.map((visit) => ({
      id: visit.id,
      type: visit.type,
      dateTime: visit.updatedAt,
      comments: visit.comments,
      pharmacist: visit.prescription_processed_by?.name,
      doctorName: visit.prescription_ordered_by?.name, // Handle missing doctor name
      drugs: visit.drugs,
    }))

    res.json(prescriptionEventsTransformed)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

router.put('/lab/:id', (async (req, res, next) => {
  const { tests, staffId, comments } = req.body as LabUpdateRequestBody

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
    labEvents.comments = comments

    const processedBy = await Staff.findOne({
      where: {
        id: staffId,
      },
    })

    const labEventsTransformed = {
      id: labEvents.id,
      type: labEvents.type,
      dateTime: labEvents.updatedAt,
      comments: labEvents.comments,
      technicianName: labEvents.lab_processed_by?.name,
      doctorName: labEvents.lab_ordered_by?.name, // Handle missing doctor name
      tests: labEvents.tests,
    }

    console.log(processedBy)
    if (processedBy) {
      labEvents.lab_processed_by = processedBy
      await labEvents.save()
      res.status(200).json(labEventsTransformed)
      return
    }
    next()

    // res.json(labEvents)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

router.put('/scan/:id', (async (req, res, next) => {
  const { images, staffId, comments } = req.body as ScanUpdateRequestBody

  const id: string = req.params.id
  try {
    const scanEvents = await ScanEvent.findOne({
      where: {
        id: id,
      },
    })

    console.log(scanEvents)

    if (!scanEvents) {
      res.status(404).json('event is not found!')
      return
    }
    scanEvents.images = images
    scanEvents.comments = comments

    const processedBy = await Staff.findOne({
      where: {
        id: staffId,
      },
    })

    console.log(processedBy)
    if (processedBy) {
      scanEvents.scan_processed_by = processedBy
      await scanEvents.save()

      const scanEventsTransformed = {
        id: scanEvents.id,
        type: scanEvents.type,
        dateTime: scanEvents.updatedAt,
        comments: scanEvents.comments,
        technicianName: scanEvents.scan_processed_by?.name,
        doctorName: scanEvents.scan_ordered_by?.name, // Handle missing doctor name
        images: scanEvents.images,
      }
      res.status(200).json(scanEventsTransformed)
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
