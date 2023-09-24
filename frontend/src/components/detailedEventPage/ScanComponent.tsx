import { BiSolidCommentDetail } from 'react-icons/bi'
import { BsCalendar4Event } from 'react-icons/bs'
import { FaUserNurse, FaXRay } from 'react-icons/fa'
import { Scan, Image } from '../../types'
import radiography from '/radiography.png'

interface ScanComponentProps {
  event: Scan
}
const ScanComponent: React.FC<ScanComponentProps> = ({ event }) => {
  const { doctorName, images, comments, dateTime, type } = event
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
          <div>
            {images.map((image: Image, index: number) => {
              return (
                <div className=" rounded-sm my-6 shadow-lg " key={index}>
                  <div className="flex flex-col ">
                    <div>
                      <div
                        className="p-5  rounded-xl flex justify-between flex-col items-start  
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
              )
            })}
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

export default ScanComponent
