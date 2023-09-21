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
} from '../../types'
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
import { GiMedicines } from 'react-icons/gi'

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
    <main className="  bg-gradient-to-br from-white to-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 max-w-3xl">
      <section className=" mx-10 my-2 ">
        <div className="text-blue-950 flex items-center  pt-4 justify-center mb-6">
          <img src={doctor} className=" w-16  text-blue-800" />
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
        <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mt-2 mb-6 ">
          {details}
        </div>

        {comments && (
          <>
            <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
              <BiSolidCommentDetail className="mr-1 " /> Comments
            </div>
            <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mb-6 ">
              {comments}
            </div>
          </>
        )}
      </section>
    </main>
  )
}

const NurseVisitComponent: React.FC<NurseVisitComponentProps> = ({ event }) => {
  const { diagnosis, dateTime, details, nurseName, comments, type } = event
  return (
    <main className="   bg-gradient-to-br from-white to-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 max-w-3xl">
      <section className=" mx-10 my-2 ">
        <div className="text-blue-950 flex items-center  pt-4 justify-center mb-6">
          <img src={nurse} className=" w-16  text-blue-800" />
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
          Nurse's name: {nurseName}
        </div>
        <div className="mt-6 text-lg font-semibold text-blue-900 flex items-center">
          <TbReport className="mr-1 text-lg" /> Visit summary :
        </div>
        <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mt-2 mb-6 ">
          {details}
        </div>

        {comments && (
          <>
            <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
              <BiSolidCommentDetail className="mr-1 " /> Comments
            </div>
            <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mb-6 ">
              {comments}
            </div>
          </>
        )}
      </section>
    </main>
  )
}

const EmergencyVisitComponent: React.FC<EmergencyVisitComponentProps> = ({
  event,
}) => {
  const { diagnosis, dateTime, details, doctorName, type, comments } = event
  return (
    <main className="   bg-gradient-to-br from-white to-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 max-w-3xl">
      <section className=" mx-10 my-2 ">
        <div className="text-blue-950 flex items-center  pt-4 justify-center mb-6">
          <img src={emergency} className=" w-16  text-blue-800" />
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
        <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mt-2 mb-6 ">
          {details}
        </div>

        {comments && (
          <>
            <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
              <BiSolidCommentDetail className="mr-1 " /> Comments
            </div>
            <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mb-6 ">
              {comments}
            </div>
          </>
        )}
      </section>
    </main>
  )
}

const AdmissionComponent: React.FC<AdmissionComponentProps> = ({ event }) => {
  const { diagnosis, dateTime, details, doctorName, type, comments } = event
  return (
    <main className="   bg-gradient-to-br from-white to-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 max-w-3xl">
      <section className=" mx-10 my-2 ">
        <div className="text-blue-950 flex items-center  pt-4 justify-center mb-6">
          <img src={hospital} className=" w-14  text-blue-800" />
          <h1 className="text-3xl  ml-4 font-semibold">{type}</h1>
        </div>

        {diagnosis && (
          <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
            <TbReportSearch className="mr-1 text-lg" /> Diagnosis: {diagnosis}
          </div>
        )}

        <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
          <BsCalendar4Event className="mr-1 text-base" />
          Admission Date: {new Date(dateTime).toDateString()}
        </div>
        <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
          <FaUserNurse className="mr-1 " />
          Doctor's name: {doctorName}
        </div>
        <div className="mt-6 text-lg font-semibold text-blue-900 flex items-center">
          <TbReport className="mr-1 text-lg" /> Admission summary :
        </div>
        <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mt-2 mb-6 ">
          {details}
        </div>

        {comments && (
          <>
            <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
              <BiSolidCommentDetail className="mr-1 " /> Comments
            </div>
            <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mb-6 ">
              {comments}
            </div>
          </>
        )}
      </section>
    </main>
  )
}

const InPatientVisitComponent: React.FC<InPatientVisitComponentProps> = ({
  event,
}) => {
  const { diagnosis, dateTime, details, doctorName, type, comments } = event
  return (
    <main className="   bg-gradient-to-br from-white to-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 max-w-3xl">
      <section className=" mx-10 my-2 ">
        <div className="text-blue-950 flex items-center  pt-4 justify-center mb-6">
          <img src={hospitalBed} className=" w-16  text-blue-800" />
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
        <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mt-2 mb-6 ">
          {details}
        </div>

        {comments && (
          <>
            <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
              <BiSolidCommentDetail className="mr-1 " /> Comments
            </div>
            <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mb-6 ">
              {comments}
            </div>
          </>
        )}
      </section>
    </main>
  )
}

const DischargeComponent: React.FC<DischargeComponentProps> = ({ event }) => {
  const { diagnosis, dateTime, details, doctorName, type, comments } = event
  return (
    <main className="   bg-gradient-to-br from-white to-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 max-w-3xl">
      <section className=" mx-10 my-2 ">
        <div className="text-blue-950 flex items-center  pt-4 justify-center mb-6">
          <img src={discharge} className=" w-14  text-blue-800" />
          <h1 className="text-3xl  ml-4 font-semibold">{type}</h1>
        </div>

        {diagnosis && (
          <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
            <TbReportSearch className="mr-1 text-lg" /> Diagnosis: {diagnosis}
          </div>
        )}

        <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
          <BsCalendar4Event className="mr-1 text-base" />
          Discharge Date: {new Date(dateTime).toDateString()}
        </div>
        <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
          <FaUserNurse className="mr-1 " />
          Doctor's name: {doctorName}
        </div>
        <div className="mt-6 text-lg font-semibold text-blue-900 flex items-center">
          <TbReport className="mr-1 text-lg" /> Discharge summary :
        </div>
        <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mt-2 mb-6 ">
          {details}
        </div>

        {comments && (
          <>
            <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
              <BiSolidCommentDetail className="mr-1 " /> Comments
            </div>
            <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mb-6 ">
              {comments}
            </div>
          </>
        )}
      </section>
    </main>
  )
}

const LabComponent: React.FC<LabComponentProps> = ({ event }) => {
  const { doctorName, tests, dateTime, comments, type } = event
  return (
    <>
      <main className="  bg-gradient-to-br from-white to-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 w-auto">
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

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full pb-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium border-neutral-500">
                      <tr>
                        <th scope="col" className="px-4 py-4">
                          Test type {`(dose)`}
                        </th>
                        <th scope="col" className="px-4 py-4">
                          value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tests &&
                        tests.map((test, i) => {
                          return (
                            <tr
                              key={i}
                              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 "
                            >
                              <td className=" px-4 py-4 font-medium">
                                {test.name}
                              </td>

                              <td
                                className={` px-4 py-4 font-medium ${
                                  test.result
                                    ? ''
                                    : '  text-orange-700 pl-1.5  '
                                }`}
                              >
                                {test.result ? test.result : '• pending '}
                              </td>
                            </tr>
                          )
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {comments && (
            <>
              <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
                <BiSolidCommentDetail className="mr-1 " /> Comments
              </div>
              <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mb-6 ">
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
      <main className="   bg-gradient-to-br from-white to-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 w-auto">
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
          <div className=" rounded-sm my-6 shadow-lg ">
            <div className="flex flex-col ">
              <div>
                <div
                  className="p-5  flex justify-between flex-col items-start  
                       bg-neutral-50 "
                >
                  <div className=" font-medium bg-blue-200 p-4 rounded-lg shadow-lg my-4 ">
                    image type: {image.name}
                  </div>
                  {image.result && (
                    <div className=" leading-10 font-normal mx-2 max-w-4xl ">
                      {image.result}
                    </div>
                  )}
                  {!image.result && (
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
  const { dateTime, comments, doctorName, type, drugs } = event
  return (
    <>
      <main className="   bg-gradient-to-br from-white to-blue-100 mx-4 md:mx-10 mt-10 rounded-xl shadow-sm shadow-blue-950 w-auto">
        <section className=" mx-10 my-2 ">
          <div className="text-blue-950 flex items-center  pt-4 justify-center mb-6">
            <img
              src={prescription}
              aria-label="lab"
              className=" w-14  text-blue-800"
            />
            <h1 className="text-3xl  ml-4 font-semibold">{type}</h1>
          </div>

          <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
            <BsCalendar4Event className="mr-1 text-base" />
            prescription Date: {new Date(dateTime).toDateString()}
          </div>
          <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
            <FaUserNurse className="mr-1 " />
            Prescribed by: Dr. {doctorName}
          </div>

          <div className="mt-6 text-lg font-semibold text-blue-900 flex items-center">
            <GiMedicines className="mr-1 " /> Prescriptions
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full pb-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium border-neutral-500">
                      <tr>
                        <th scope="col" className="px-4 py-4">
                          drug name {`(dose)`}
                        </th>
                        <th scope="col" className="px-4 py-4">
                          Available Quantity
                        </th>
                        <th scope="col" className="px-4 py-4">
                          usage instructions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {drugs.map((drug, i) => {
                        return (
                          <tr
                            key={i}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 "
                          >
                            <td className=" px-4 py-4 font-medium">
                              {' '}
                              {drug.name} {`(${drug.dose})`}
                            </td>
                            <td className=" px-4 py-4 font-medium">
                              {drug.quantity}
                            </td>
                            <td className=" px-4 py-4 font-medium">
                              {drug.instruction}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {comments && (
            <>
              <div className="my-2 text-lg font-semibold text-blue-900 flex items-center">
                <BiSolidCommentDetail className="mr-1 " /> Comments
              </div>
              <div className=" text-amber-950 leading-8 bg-white p-4 rounded-2xl border-slate-500 border mb-6 ">
                {comments}
              </div>
            </>
          )}
        </section>
      </main>
    </>
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
