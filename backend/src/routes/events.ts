import express, { RequestHandler } from 'express'
import { LabEvent, Patient, OutpatientVisit, Staff } from '../models'

const router = express.Router()

router.get('/', (async (_req, res, next) => {
  try {
    const outpatient_visit = await OutpatientVisit.findAll({
      include: [
        {
          model: Patient,
          as: 'outpatient_visit_patient',
          attributes: ['name'],
        },
        { model: Staff, as: 'outpatient_visit_staff', attributes: ['name'] },
      ],
    })
    const lab_event = await LabEvent.findAll({
      include: {
        model: Patient,
        as: 'lab_event_patient',
        attributes: ['name'],
      },
    })
    res.json([...lab_event, ...outpatient_visit])
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

export default router
