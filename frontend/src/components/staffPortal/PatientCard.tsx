import { useState } from 'react'
import { MdDateRange, MdFemale, MdMale, MdContentCopy } from 'react-icons/md'
import { PatientCardProps } from '../../types'
import { PiIdentificationCard } from 'react-icons/pi'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

const PatientCard = ({ patient, onClose }: PatientCardProps) => {
  const [copyEmail, setCopyEmail] = useState<boolean>(false)
  const [copyAddress, setCopyAddress] = useState<boolean>(false)
  const [copyPhone, setCopyPhone] = useState<boolean>(false)
  const [copyId, setCopyId] = useState<boolean>(false)

  const copyToClipboard = (
    text: string | null | undefined,
    setText: React.Dispatch<React.SetStateAction<boolean>>
  ): void => {
    setText(true)
    if (text) navigator.clipboard.writeText(text)
    setTimeout(() => {
      setText(false)
    }, 5000)
  }

  return (
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-lg border p-2">
      <div className="flex flex-col  justify-between">
        <div className="font-medium flex items-center  justify-center text-blue-950  p-8 text-xl      ">
          {patient.name}
        </div>

        <div className="font-medium flex items-center text-base text-blue-950 my-1 p-2 mx-1   rounded-xl    ">
          D.O.B. <MdDateRange className="mx-1" />
          {patient.dateOfBirth}
        </div>
        <div className="font-medium flex items-center text-base text-blue-950 my-1 p-2 mx-1   rounded-xl   ">
          ID: <PiIdentificationCard className="text-xl mx-1" />
          {patient.id}{' '}
          <button
            onClick={() => copyToClipboard(patient.id.toString(), setCopyId)}
          >
            <MdContentCopy className="mx-4 text-xl hover:text-amber-800 cursor-pointer" />
          </button>
          {copyId && (
            <AiOutlineCheckCircle className="text-xl text-emerald-700 " />
          )}
        </div>
        <div className="font-medium flex items-center text-base text-blue-950 my-1 p-2 mx-1   rounded-xl   ">
          Email: {patient.email}{' '}
          <button onClick={() => copyToClipboard(patient.email, setCopyEmail)}>
            <MdContentCopy className="mx-4 text-xl hover:text-amber-800 cursor-pointer" />
          </button>
          {copyEmail && (
            <AiOutlineCheckCircle className="text-xl text-emerald-700 " />
          )}
        </div>
        {patient.phoneNumber && (
          <div className="font-medium flex items-center text-base text-blue-950 my-1 p-2 mx-1   rounded-xl   ">
            Phone Number: {patient.phoneNumber}
            <button
              onClick={() => copyToClipboard(patient.phoneNumber, setCopyPhone)}
            >
              <MdContentCopy className="mx-4 text-xl hover:text-amber-800 cursor-pointer" />
            </button>
            {copyPhone && (
              <AiOutlineCheckCircle className="text-xl text-emerald-700 " />
            )}
          </div>
        )}
        {patient.address && (
          <div className="font-medium flex items-center text-base text-blue-950 my-1 p-2 mx-1   rounded-xl n  ">
            Address: {patient.address}{' '}
            <button
              onClick={() => copyToClipboard(patient.address, setCopyAddress)}
            >
              <MdContentCopy className="mx-4 text-xl hover:text-amber-800 cursor-pointer" />
            </button>
            {copyAddress && (
              <AiOutlineCheckCircle className="text-xl text-emerald-700 mx-2  " />
            )}
          </div>
        )}
        {patient.gender === 'male' ? (
          <div className="font-medium flex items-center text-base text-blue-950 my-1 p-2  mx-1   rounded-xl   ">
            Gender: <MdMale className="mx-1" /> {patient.gender}
          </div>
        ) : (
          <div className="font-medium flex items-center text-base text-blue-950 my-1 p-2   rounded-xl   ">
            Gender: <MdFemale className="mx-1" /> {patient.gender}
          </div>
        )}
        {patient.bloodType && (
          <div className="font-medium flex items-center text-base text-blue-950 my-1 p-2 mx-1   rounded-xl   ">
            Blood type: {patient.bloodType}
          </div>
        )}
      </div>
      <div>
        <button
          onClick={onClose}
          className="   text-red-600 py-3 rounded-lg my-1 cursor-pointer w-full font-medium flex items-center justify-center hover:text-red-700"
        >
          <AiOutlineCloseCircle className="mx-1 text-2xl" /> Close
        </button>
      </div>
    </main>
  )
}

export default PatientCard
