import { FaUserAlt, FaHospitalUser } from 'react-icons/fa'
import { BiLogIn } from 'react-icons/bi'

const LandingPage = () => {
  return (
    <main className="min-h-screen   bg-blue-50">
      <section className=" px-10 py-10 text-center ">
        <div className="mb-40">
          <h1 className="mb-4 text-3xl font-medium text-blue-900">
            Select User type
          </h1>
          <h3 className="text-blue-900 text-opacity-60">
            you can change user's type anytime!{' '}
          </h3>
        </div>
      </section>
      <section className=" flex flex-col md:flex-row justify-center items-center ">
        <div className="bg-blue-500 p-2 px-2 my-4 rounded-2xl shadow-md shadow-blue-800 flex flex-row items-center justify-center text-white text-l w-52  cursor-pointer mx-5 hover:bg-blue-600">
          <FaUserAlt />
          <h2 className=" my-4 mx-3 font-medium mb-4">Individuals</h2>
          <BiLogIn className="text-2xl" />
        </div>

        <div className="bg-blue-100 p-2 px-2 my-4 rounded-2xl shadow-lg flex flex-row items-center justify-center text-blue-600 text-l w-56  cursor-pointer mx-5 hover:bg-blue-200">
          <FaHospitalUser className="text-2xl" />
          <h2 className="my-4 mx-3 font-medium mb-4"> Staff Portal</h2>
          <BiLogIn className="text-2xl" />
        </div>
      </section>
    </main>
  )
}

export default LandingPage
