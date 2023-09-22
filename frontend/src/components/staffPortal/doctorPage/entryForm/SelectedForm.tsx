import { EntryFormValues } from '../../../../types'
import AdmissionForm from './AdmissionForm'
import AppointmentForm from './AppointmentForm'
import DischargeForm from './DischargeForm'
import EmergencyForm from './EmergencyForm'
import InpatientForm from './InpatientForm'
import LabForm from './Labform'
import OutpatientForm from './OutPatientForm'
import ScanForm from './ScanForm'
import PrescriptionForm from './PrescriptionForm'
const SelectedForm = ({
  handleSubmit,
  patientId,
  selectedForm,
}: {
  handleSubmit: (values: EntryFormValues) => Promise<void>
  patientId: string
  selectedForm: string | null
}) => {
  switch (selectedForm) {
    case 'outpatient':
      return <OutpatientForm patientId={patientId} onSubmit={handleSubmit} />
    case 'inpatient':
      return <InpatientForm patientId={patientId} onSubmit={handleSubmit} />
    case 'admission':
      return <AdmissionForm patientId={patientId} onSubmit={handleSubmit} />
    case 'emergency':
      return <EmergencyForm patientId={patientId} onSubmit={handleSubmit} />
    case 'discharge':
      return <DischargeForm patientId={patientId} onSubmit={handleSubmit} />
    case 'lab':
      return <LabForm patientId={patientId} onSubmit={handleSubmit} />
    case 'scan':
      return <ScanForm patientId={patientId} onSubmit={handleSubmit} />
    case 'appointment':
      return <AppointmentForm patientId={patientId} onSubmit={handleSubmit} />
    case 'prescription':
      return <PrescriptionForm patientId={patientId} onSubmit={handleSubmit} />
    default:
      return (
        <div className="flex justify-center mt-1 text-neutral-700">
          Select the entry type
        </div>
      )
  }
}

export default SelectedForm
