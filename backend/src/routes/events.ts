import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express'
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
  Appointment,
} from '../models'
import { asyncMiddlewareWrapper, userExtractor } from '../utils/middleware'
import { Drug, Image, Test } from '../types'
import { uuid } from 'uuidv4'

interface RequestWithToken extends Request {
  token?: string
  user?: Patient | Staff | null
}

interface BasicRequestBody {
  patientId: string
  diagnosis: string
  details: string
  comments?: string
}

interface LabRequestBody {
  patientId: string
  tests: Test[]
  comments?: string
}

interface ScanRequestBody {
  patientId: string
  images: Image[]
  comments?: string
}

interface PrescriptionRequestBody {
  patientId: string
  drugs: Drug[]
  comments?: string
}

interface AppointmentRequestBody {
  date: string
  time: {
    hours: string
    minutes: string
  }
  duration: string
  patientId: string
  type: string
  comments?: string
}
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
      images: visit.images,
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

    const appointments = await Appointment.findAll({
      include: [
        {
          model: Staff,
          as: 'appointment_staff',
          attributes: ['name'],
        },
      ],
      where: {
        patientId: id,
      },
    })

    const appointmentsTransformed = appointments.map((appointment) => ({
      id: appointment.id,
      type: appointment.type,
      staffName: appointment.appointment_staff?.name,
      dateTime: appointment.startDate,
      duration:
        (appointment.endDate.getTime() - appointment.startDate.getTime()) /
        1000 /
        60,
      comments: appointment.comments,
      active: appointment.active,
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
      prescriptionsTransformed,
      appointmentsTransformed
    )

    const flattenedOutcomes = allOutcomes.flat().map((event) => {
      return { ...event }
    })

    // Send the array as the response
    res.json(flattenedOutcomes)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

router.post('/', asyncMiddlewareWrapper(userExtractor), (async (
  req: RequestWithToken,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('Im here successfully')
    const staffId = req.user?.id

    if (!staffId) {
      res.status(400).json({
        error: 'Unauthorized access. Staff could have not been verified',
      })
      return
    }

    const type = req.body.type as string
    console.log(req.body)
    if (type === 'Doctor Visit') {
      const { patientId, diagnosis, details, comments } =
        req.body as BasicRequestBody

      const event = await OutpatientVisit.create({
        id: uuid(),
        staffId,
        patientId,
        diagnosis,
        details,
        comments,
        type,
      })

      console.log(event)

      res.send(event)
      return
    }

    if (type === 'In-Patient Visit') {
      const { patientId, diagnosis, details, comments } =
        req.body as BasicRequestBody

      const event = await InpatientVisit.create({
        id: uuid(),
        staffId,
        patientId,
        diagnosis,
        details,
        comments,
        type,
      })

      console.log(event)

      res.send(event)
      return
    }

    if (type === 'Admission') {
      const { patientId, diagnosis, details, comments } =
        req.body as BasicRequestBody

      const event = await Admission.create({
        id: uuid(),
        staffId,
        patientId,
        diagnosis,
        details,
        comments,
        type,
      })

      console.log(event)

      res.send(event)
      return
    }

    if (type === 'Nurse Visit') {
      const { patientId, diagnosis, details, comments } =
        req.body as BasicRequestBody

      const event = await NurseVisit.create({
        id: uuid(),
        staffId,
        patientId,
        diagnosis,
        details,
        comments,
        type,
      })

      console.log(event)

      res.send(event)
      return
    }

    if (type === 'Emergency Visit') {
      const { patientId, diagnosis, details, comments } =
        req.body as BasicRequestBody

      const event = await EmergencyVisit.create({
        id: uuid(),
        staffId,
        patientId,
        diagnosis,
        details,
        comments,
        type,
      })

      console.log(event)

      res.send(event)
      return
    }

    if (type === 'Discharge') {
      const { patientId, diagnosis, details, comments } =
        req.body as BasicRequestBody

      const event = await Discharge.create({
        id: uuid(),
        staffId,
        patientId,
        diagnosis,
        details,
        comments,
        type,
      })

      console.log(event)

      res.send(event)
      return
    }

    if (type === 'Laboratory tests') {
      const { patientId, tests, comments } = req.body as LabRequestBody

      const event = await LabEvent.create({
        id: uuid(),
        orderedBy: staffId,
        patientId,
        tests,
        comments,
        type,
      })

      console.log(event)

      res.send(event)
      return
    }

    if (type === 'Appointment') {
      const { patientId, date, time, duration, type, comments } =
        req.body as AppointmentRequestBody

      const startDate: Date = new Date(`${date} ${time.hours}:${time.minutes}`)
      const endDate: Date = new Date(
        startDate.getTime() + Number(duration) * 1000 * 60
      )

      console.log(staffId, patientId, startDate, endDate, comments, type)
      const event = await Appointment.create({
        id: uuid(),
        staffId,
        patientId,
        startDate,
        endDate,
        comments,
        type,
      })

      console.log(event)

      res.send(event)
      return
    }

    if (type === 'Medical Imaging') {
      const { patientId, images, comments } = req.body as ScanRequestBody

      const event = await ScanEvent.create({
        id: uuid(),
        orderedBy: staffId,
        patientId,
        images,
        comments,
        type,
      })
      console.log(event)

      res.send(event)
      return
    }

    if (type === 'Prescriptions') {
      const { patientId, drugs, comments } = req.body as PrescriptionRequestBody

      const event = await PrescriptionEvent.create({
        id: uuid(),
        orderedBy: staffId,
        patientId,
        drugs,
        comments,
        type,
      })
      console.log(event)

      res.send(event)
      return
    }

    next()
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as unknown as RequestHandler)

export default router
