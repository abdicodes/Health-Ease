import { BiSolidCommentDetail } from 'react-icons/bi'
import { BsCalendar4Event } from 'react-icons/bs'
import { FaUserNurse } from 'react-icons/fa'
import { GiMedicines } from 'react-icons/gi'
import { Prescription } from '../../types'
import prescription from '/prescription.png'

interface PrescriptionComponentProps {
  event: Prescription
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

export default PrescriptionComponent
