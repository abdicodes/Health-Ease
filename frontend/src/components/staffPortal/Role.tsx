import nurse from '/nurse2.png'
import doctor from '/doctor2.png'
import pharmacist from '/pharmacist.png'
import lab from '/lab2.png'
import receptionist from '/receptionist.png'
import administrator from '/sysadmin.png'
import radiographer from '/radiographer.png'

const Role = ({ role }: { role: number }) => {
  switch (role) {
    case 0:
      return (
        <button className="bg-blue-50 border-opacity-10 border-blue-800 border shadow-lg w-1/2 sm:w-1/3  lg:w-1/5 mx-6 flex flex-col items-center justify-center  my-6  ">
          <img src={administrator} height="100" alt="administrator" />
          <h2 className="py-2 font-medium text-xl">Administrator</h2>
        </button>
      )

    case 1:
      return (
        <button className="bg-blue-50 border-opacity-10 border-blue-800 border shadow-lg w-1/2 sm:w-1/3  lg:w-1/5 mx-6 flex flex-col items-center justify-center  my-6 ">
          <img src={doctor} height="100" alt="doctor" />
          <h2 className="py-2 font-medium text-xl">Doctor</h2>
        </button>
      )

    case 2:
      return (
        <button className="bg-blue-50 border-opacity-10 border-blue-800 border shadow-lg w-1/2 sm:w-1/3  lg:w-1/5 mx-6 flex flex-col items-center justify-center  my-6 ">
          <img src={nurse} height="100" alt="nurse" />
          <h2 className="py-2 font-medium text-xl">Nurse</h2>
        </button>
      )

    case 3:
      return (
        <button className="bg-blue-50 border-opacity-10 border-blue-800 border shadow-lg w-1/2 sm:w-1/3  lg:w-1/5 mx-6 flex flex-col items-center justify-center  my-6 ">
          <img src={lab} height="100" alt="Laboratory staff" />
          <h2 className="py-2 font-medium text-xl">Laboratorian</h2>
        </button>
      )
    case 4:
      return (
        <button className="bg-blue-50 border-opacity-10 border-blue-800 border shadow-lg w-1/2 sm:w-1/3  lg:w-1/5 mx-6 flex flex-col items-center justify-center  my-6 ">
          <img src={radiographer} height="100" alt="radiographer" />
          <h2 className="py-2 font-medium text-xl">Radiographer</h2>
        </button>
      )

    case 5:
      return (
        <button className="bg-blue-50 border-opacity-10 border-blue-800 border shadow-lg w-1/2 sm:w-1/3  lg:w-1/5 mx-6 flex flex-col items-center justify-center  my-6 ">
          <img src={pharmacist} height="100" alt="pharmacist" />
          <h2 className="py-2 font-medium text-xl">Pharmacist</h2>
        </button>
      )

    case 6:
      return (
        <button className="bg-blue-50 border-opacity-10 border-blue-800 border shadow-lg w-1/2 sm:w-1/3  lg:w-1/5 mx-6 flex flex-col items-center justify-center  my-6 ">
          <img src={receptionist} height="100" alt="receptionist" />
          <h2 className="py-2 font-medium text-xl">Receptionist</h2>
        </button>
      )
  }
}

export default Role
