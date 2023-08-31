import React from 'react'
import {
  Event,
  EventTypes,
  DoctorVisit,
  NurseVisit,
  Admission,
  InPatientVisit,
  EmergencyVisit,
  Discharge,
  Lab,
  Scan,
  Prescription,
} from '../../../types'
import doctor from '/doctor.png'
import nurse from '/nurse.png'
import emergency from '/emergency.png'
import hospital from '/hospital.png'
import hospitalBed from '/hospital-bed.png'
import lab from '/lab.png'
import radiography from '/radiography.png'
import prescription from '/prescription.png'
import discharge from '/discharge.png'
import { TbReportSearch, TbReport } from 'react-icons/tb'
import { BsCalendar4Event } from 'react-icons/bs'
import { FaUserNurse, FaXRay } from 'react-icons/fa'
import { BiSolidCommentDetail, BiTestTube } from 'react-icons/bi'

interface EventProps {
  event: Event | never
}

interface DoctorVisitComponentProps {
  event: DoctorVisit
}

interface AdmissionComponentProps {
  event: Admission
}

interface InPatientVisitComponentProps {
  event: InPatientVisit
}

interface DischargeComponentProps {
  event: Discharge
}

interface EmergencyVisitComponentProps {
  event: EmergencyVisit
}

interface NurseVisitComponentProps {
  event: NurseVisit
}

interface LabComponentProps {
  event: Lab
}

interface ScanComponentProps {
  event: Scan
}

interface PrescriptionComponentProps {
  event: Prescription
}
const assertNever = (value: never): never => {
  throw new Error(`Unhandled error ${JSON.stringify(value)}`)
}

export const DoctorVisitComponent: React.FC<DoctorVisitComponentProps> = ({
  event,
}) => {
  const { diagnosis, dateTime, details, doctorName, type, comments } = event
  return (
    <main className="  bg-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 max-w-3xl">
      <section className=" mx-10 my-2 ">
        <div className="text-blue-950 flex items-center  pt-4 justify-center mb-6">
          <img src={doctor} className=" w-20  text-blue-800" />
          <h1 className="text-3xl  ml-4 font-semibold">{type}</h1>
        </div>

        {diagnosis && (
          <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
            <TbReportSearch className="mr-1 text-lg" /> Diagnosis: {diagnosis}
          </div>
        )}

        <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
          <BsCalendar4Event className="mr-1 text-base" />
          Visit Date: {new Date(dateTime).toDateString()}
        </div>
        <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
          <FaUserNurse className="mr-1 " />
          Doctor's name: {doctorName}
        </div>
        <div className="mt-6 text-lg font-semibold text-blue-900 flex items-center">
          <TbReport className="mr-1 text-lg" /> Visit summary :
        </div>
        <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border-2 mb-6 ">
          {details}
        </div>

        {comments && (
          <>
            <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
              <BiSolidCommentDetail className="mr-1 " /> Comments
            </div>
            <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border-2 mb-6 ">
              {comments}
            </div>
          </>
        )}
      </section>
    </main>
  )
}

const NurseVisitComponent: React.FC<NurseVisitComponentProps> = ({ event }) => {
  const { diagnosis, dateTime, details, nurseName } = event
  return (
    <main className=" ">
      <section className=" ml-10 pt-10 ">
        <img src={nurse} className=" w-20 mx-auto text-blue-800" />
        {diagnosis && <p> Diagnosis: {diagnosis}</p>}
        <h3>
          <BsCalendar4Event /> Date: {dateTime}
        </h3>
        <h3>Visit summary : {details}</h3>
        <h3>Nurse's name: {nurseName}</h3>
      </section>
    </main>
  )
}

const EmergencyVisitComponent: React.FC<EmergencyVisitComponentProps> = ({
  event,
}) => {
  const { diagnosis, dateTime, details, doctorName } = event
  return (
    <main className=" ">
      <section className=" ml-10 pt-10 ">
        <img src={emergency} className=" w-20 mx-auto text-blue-800" />
        {diagnosis && <p> Diagnosis: {diagnosis}</p>}
        <h3> Date: {dateTime}</h3>
        <h3>Visit summary : {details}</h3>
        <h3>Doctor's name: {doctorName}</h3>
      </section>
    </main>
  )
}

const AdmissionComponent: React.FC<AdmissionComponentProps> = ({ event }) => {
  const { diagnosis, dateTime, details, doctorName } = event
  return (
    <main className=" ">
      <section className=" ml-10 pt-10 ">
        <img src={hospital} className=" w-20 mx-auto text-blue-800" />
        {diagnosis && <p> Diagnosis: {diagnosis}</p>}
        <h3> Date: {dateTime}</h3>
        <h3>Admission summary : {details}</h3>
        <h3>Doctor's name: {doctorName}</h3>
      </section>
    </main>
  )
}

const InPatientVisitComponent: React.FC<InPatientVisitComponentProps> = ({
  event,
}) => {
  const { diagnosis, dateTime, details, doctorName } = event
  return (
    <main className=" ">
      <section className=" ml-10 pt-10 ">
        <img src={hospitalBed} className=" w-20 mx-auto text-blue-800" />
        {diagnosis && <p> Diagnosis: {diagnosis}</p>}
        <h3> Date: {dateTime}</h3>
        <h3>Ward visit summary : {details}</h3>
        <h3>Doctor's name: {doctorName}</h3>
      </section>
    </main>
  )
}

const DischargeComponent: React.FC<DischargeComponentProps> = ({ event }) => {
  const { diagnosis, dateTime, details, doctorName } = event
  return (
    <main className=" ">
      <section className=" ml-10 pt-10 ">
        <img src={discharge} className=" w-20 mx-auto text-blue-800" />
        {diagnosis && <p> Diagnosis: {diagnosis}</p>}
        <h3> Date: {dateTime}</h3>
        <h3>discharge summary : {details}</h3>
        <h3>Doctor's name: {doctorName}</h3>
      </section>
    </main>
  )
}

const LabComponent: React.FC<LabComponentProps> = ({ event }) => {
  const { doctorName, tests, dateTime, comments, type } = event
  return (
    <>
      <main className="  bg-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 w-auto">
        <section className=" mx-10 my-2 ">
          <div className="text-blue-950 flex items-center  pt-4 justify-center mb-6">
            <img src={lab} aria-label="lab" className=" w-14  text-blue-800" />
            <h1 className="text-3xl  ml-4 font-semibold">{type}</h1>
          </div>

          <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
            <BsCalendar4Event className="mr-1 text-base" />
            Visit Date: {new Date(dateTime).toDateString()}
          </div>
          <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
            <FaUserNurse className="mr-1 " />
            Ordered by: Dr. {doctorName}
          </div>

          <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
            <BiTestTube className="mr-1 " /> Results
          </div>
          <div className=" border-slate-500 rounded-md my-6 shadow-xl">
            <div className=" flex font-medium justify-between text-blue-950  bg-blue-200 p-3 rounded-sm  ">
              <div className="ml-3"> Test type</div>

              <div className="mr-3"> Value</div>
            </div>
            <div className="flex flex-col  border-blue-600  ">
              {tests.map((test, i) => {
                return (
                  <div key={i}>
                    <div
                      className={`p-5  flex justify-between items-center hover:bg-slate-100 hover:font-semibold md: ${
                        i % 2 === 0 ? 'bg-white ' : 'bg-neutral-50 '
                      }`}
                    >
                      <div className="    ">{test.name}</div>
                      {test.status && (
                        <div className=" leading-8 font-semibold ">
                          {test.result}
                        </div>
                      )}
                      {!test.status && (
                        <div className="leading-8  border-orange-700 text-orange-700  rounded-xl font-semibold  ">
                          • pending
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {comments && (
            <>
              <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
                <BiSolidCommentDetail className="mr-1 " /> Comments
              </div>
              <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border-2 mb-6 ">
                {comments}
              </div>
            </>
          )}
        </section>
      </main>
    </>
  )
}

const ScanComponent: React.FC<ScanComponentProps> = ({ event }) => {
  const { doctorName, image, comments, dateTime, type } = event
  return (
    <>
      <main className="  bg-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 w-auto">
        <section className=" mx-10 my-2 ">
          <div className="text-blue-950 flex items-center  pt-4 justify-center mb-6">
            <img
              src={radiography}
              aria-label="lab"
              className=" w-14  text-blue-800"
            />
            <h1 className="text-3xl  ml-4 font-semibold">{type}</h1>
          </div>

          <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
            <BsCalendar4Event className="mr-1 text-base" />
            Visit Date: {new Date(dateTime).toDateString()}
          </div>
          <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
            <FaUserNurse className="mr-1 " />
            Ordered by: Dr. {doctorName}
          </div>

          <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
            <FaXRay className="mr-1 " /> Results
          </div>
          <div className=" rounded-md my-6 shadow-lg">
            <div className="flex flex-col ">
              <div>
                <div
                  className="p-5  flex justify-between flex-col items-start  
                       bg-neutral-50 "
                >
                  <div className=" font-semibold bg-blue-200 p-2 rounded-lg shadow-lg my-4">
                    image type: {image.name}
                  </div>
                  {image.status && (
                    <div className=" leading-10 font-normal mx-2 max-w-4xl ">
                      {image.result}
                    </div>
                  )}
                  {!image.status && (
                    <div className="leading-8  border-orange-700 text-orange-700  rounded-xl font-semibold  ">
                      • pending
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {comments && (
            <div className="flex flex-col justify-center items-center">
              <div className="my-2 text-lg font-semibold text-blue-900 flex items-center min-w-fit">
                <BiSolidCommentDetail className="mr-1 " /> Comments
              </div>
              <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border-2 mb-6 ">
                {comments}
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  )
}

const PrescriptionComponent: React.FC<PrescriptionComponentProps> = ({
  event,
}) => {
  return (
    <main>
      <img src={prescription} />
      <h3>prescriptions : </h3>
      <ul>
        {event.drugs.map((drug, i) => (
          <li key={i}>
            drug name: {drug.name} quantity: {drug.quantity} dose: {drug.dose}
          </li>
        ))}
      </ul>
      <p> Prescribed by Dr: {event.doctorName}</p>
      {event.pharmacist && <p> Done by : {event.pharmacist}</p>}
      <p> Prescription Expiration date: {event.expirayDate}</p>
    </main>
  )
}

const DetailedEventContainer: React.FC<EventProps> = ({ event }) => {
  switch (event.type) {
    case EventTypes.DoctorVisit:
      return <DoctorVisitComponent event={event} />

    case EventTypes.NurseVisit:
      return <NurseVisitComponent event={event} />

    case EventTypes.Admission:
      return <AdmissionComponent event={event} />

    case EventTypes.InPatientVisit:
      return <InPatientVisitComponent event={event} />

    case EventTypes.Discharge:
      return <DischargeComponent event={event} />

    case EventTypes.Lab:
      return <LabComponent event={event} />

    case EventTypes.Scan:
      return <ScanComponent event={event} />

    case EventTypes.Prescription:
      return <PrescriptionComponent event={event} />

    case EventTypes.EmergencyVisit:
      return <EmergencyVisitComponent event={event} />

    default:
      return assertNever(event)
  }
}

export default DetailedEventContainer
