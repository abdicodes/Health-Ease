import { FaUserAlt, FaHospitalUser } from 'react-icons/fa'
import { BiLogIn } from 'react-icons/bi'
import Stethoscope from '/stethoscope.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <main className="min-h-screen   bg-blue-50">
      <section className=" px-10 pt-10 text-center ">
        <div className="mb-10">
          <h1 className="mb-4 text-3xl font-medium text-blue-900">
            Select User type
          </h1>
          <h3 className="text-blue-900 text-opacity-60">
            you can change user's type anytime!{' '}
          </h3>
          <img
            className="mx-auto mt-5  max-w-xs  bg-blue-600 bg-opacity-20 rounded-full md:max-w-sm "
            src={Stethoscope}
          />
        </div>
      </section>
      <section className=" flex flex-col md:flex-row justify-center items-center">
        <Link to={'/patient-portal'}>
          <button className="bg-blue-500 p-2 px-2 my-4 rounded-2xl shadow-md shadow-blue-800 flex flex-row items-center justify-center text-white text-l w-52  cursor-pointer mx-5 hover:bg-blue-600">
            <FaUserAlt />
            <h2 className=" my-4 mx-3 font-semibold mb-4">Individuals</h2>
            <BiLogIn className="text-2xl" />
          </button>
        </Link>

        <button className="bg-blue-50 p-2 px-2 my-4 rounded-2xl border-blue-300 border-2 shadow-lg flex flex-row items-center justify-center text-blue-600 text-l w-56  cursor-pointer mx-5 hover:bg-blue-200">
          <FaHospitalUser className="text-2xl" />
          <h2 className="my-4 mx-3 font-semibold mb-4"> Staff Portal</h2>
          <BiLogIn className="text-2xl" />
        </button>
      </section>
    </main>
  )
}

export default LandingPage
