import express, { RequestHandler } from 'express'
import {
  LabEvent,
  Patient,
  OutpatientVisit,
  Staff,
  InpatientVisit,
  Admission,
  Discharge,
  ScanEvent,
  NurseVisit,
  EmergencyVisit,
  PrescriptionEvent,
} from '../models'
import { asyncMiddlewareWrapper, userExtractor } from '../utils/middleware'

// interface PatientResBody {
//   name: string
//   id: number
//   dateOfBirth: string
//   gender: string
//   bloodType?: string
//   email: string
//   isAdmitted: boolean
//   address?: string
// }

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

router.get('/:id', (async (req, res, next) => {
  try {
    const id = req.params.id

    console.log('the ID is : ', id)

    // Create an array to collect all outcomes
    const allOutcomes = []

    const outpatientVisits = await OutpatientVisit.findAll({
      include: {
        model: Staff,
        as: 'outpatient_visit_staff',
        attributes: ['name'],
      },
      where: {
        patientId: id,
      },
    })

    const outpatientTransformed = outpatientVisits.map((visit) => ({
      id: visit.id,
      type: visit.type,
      dateTime: visit.updatedAt,
      comments: visit.comments,
      diagnosis: visit.diagnosis,
      details: visit.details,
      doctorName: visit.outpatient_visit_staff?.name, // Handle missing doctor name
    }))

    const inpatientVisits = await InpatientVisit.findAll({
      include: {
        model: Staff,
        as: 'inpatient_visit_staff',
        attributes: ['name'],
      },
      where: {
        patientId: id,
      },
    })

    const inpatientTransformed = inpatientVisits.map((visit) => ({
      id: visit.id,
      type: visit.type,
      dateTime: visit.updatedAt,
      comments: visit.comments,
      diagnosis: visit.diagnosis,
      details: visit.details,
      doctorName: visit.inpatient_visit_staff?.name, // Handle missing doctor name
    }))

    const admissionVisits = await Admission.findAll({
      include: {
        model: Staff,
        as: 'admission_staff',
        attributes: ['name'],
      },
      where: {
        patientId: id,
      },
    })

    const admissionTransformed = admissionVisits.map((visit) => ({
      id: visit.id,
      type: visit.type,
      dateTime: visit.updatedAt,
      comments: visit.comments,
      diagnosis: visit.diagnosis,
      details: visit.details,
      doctorName: visit.admission_staff?.name, // Handle missing doctor name
    }))

    const nurseVisits = await NurseVisit.findAll({
      include: {
        model: Staff,
        as: 'nurse_visit_staff',
        attributes: ['name'],
      },
      where: {
        patientId: id,
      },
    })

    const nurseTransformed = nurseVisits.map((visit) => ({
      id: visit.id,
      type: visit.type,
      dateTime: visit.updatedAt,
      comments: visit.comments,
      diagnosis: visit.diagnosis,
      details: visit.details,
      doctorName: visit.nurse_visit_staff?.name, // Handle missing doctor name
    }))

    const emergencyVisits = await EmergencyVisit.findAll({
      include: {
        model: Staff,
        as: 'emergency_visit_staff',
        attributes: ['name'],
      },
      where: {
        patientId: id,
      },
    })

    const emergencyVisitTransformed = emergencyVisits.map((visit) => ({
      id: visit.id,
      type: visit.type,
      dateTime: visit.updatedAt,
      comments: visit.comments,
      diagnosis: visit.diagnosis,
      details: visit.details,
      doctorName: visit.emergency_visit_staff?.name, // Handle missing doctor name
    }))

    const discharge = await Discharge.findAll({
      include: {
        model: Staff,
        as: 'discharge_staff',
        attributes: ['name'],
      },
      where: {
        patientId: id,
      },
    })

    const dischargeTransformed = discharge.map((visit) => ({
      id: visit.id,
      type: visit.type,
      dateTime: visit.updatedAt,
      comments: visit.comments,
      diagnosis: visit.diagnosis,
      details: visit.details,
      doctorName: visit.discharge_staff?.name, // Handle missing doctor name
    }))

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
      image: visit.image,
    }))

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

    const prescriptions = await PrescriptionEvent.findAll({
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

    const prescriptionsTransformed = prescriptions.map((visit) => ({
      id: visit.id,
      type: visit.type,
      dateTime: visit.updatedAt,
      comments: visit.comments,
      technicianName: visit.prescription_processed_by?.name,
      doctorName: visit.prescription_ordered_by?.name, // Handle missing doctor name
      drugs: visit.drugs,
      active: visit.active,
    }))

    // Push the outcomes into the array
    allOutcomes.push(
      outpatientTransformed,
      inpatientTransformed,
      admissionTransformed,
      nurseTransformed,
      emergencyVisitTransformed,
      dischargeTransformed,
      scanEventsTransformed,
      labEventsTransformed,
      prescriptionsTransformed
    )

    const flattenedOutcomes = allOutcomes.flat().map((event, i) => {
      return { ...event, id: i }
    })

    // Send the array as the response
    res.json(flattenedOutcomes)
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
