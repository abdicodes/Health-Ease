import express, { RequestHandler } from 'express'
import {
  LabEvent,
  Patient,
  Staff,
  // OutpatientVisit,
  // Staff,
  // InpatientVisit,
  // Admission,
  // Discharge,
  // ScanEvent,
  // NurseVisit,
  // EmergencyVisit,
  // PrescriptionEvent,
} from '../models'
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
      where: {
        patientId: id,
      },
    })

    res.json(labEvents)
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
        patientId: id,
      },
    })

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
