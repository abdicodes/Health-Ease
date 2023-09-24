// AuthContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Event, Lab, Prescription, Scan, UpdateScanFormValues } from '../types'
import {
  PatientData,
  PatientProps,
  EntryFormValues,
  UpdateLabFormvalues,
} from '../types'
const baseUrl: string = import.meta.env.VITE_BACKEND_URL

interface LoginProps {
  username: string
  password: string
}

interface PatientResponseData {
  user: UserData
  token: string
  loginMode: string
  events: Event[]
}

interface StaffResponseData {
  user: UserData
  token: string
  loginMode: string
  roles: number[]
}

//  the user context
interface AuthContextType {
  patient: PatientData | null
  patientResponse: PatientResponseData | null
  staffResponse: StaffResponseData | null
  patientErrorMessage: string | null
  events: Event[]
  selectedEvent: Event | null
  setEvent: (event: Event) => void
  searchEventsApi: (id: string) => Promise<void>
  searchLabEventsApi: (id: string) => Promise<void>
  searchScanEventsApi: (id: string) => Promise<void>
  searchPrescriptionsApi: (id: string) => Promise<void>
  patientLogin: ({ username, password }: LoginProps) => Promise<void>
  searchPatientApi: (id: string) => Promise<void>
  addEntry: (values: EntryFormValues) => Promise<void>
  updateLab: (values: UpdateLabFormvalues) => Promise<void>
  updateScan: (values: UpdateScanFormValues) => Promise<void>

  staffLogin: ({ username, password }: LoginProps) => Promise<void>
  signUp: ({
    username,
    password,
    name,
    email,
    phoneNumber,
    dateOfBirth,
    address,
    gender,
    bloodType,
  }: PatientProps) => Promise<void>
  logout: () => void
}

//  the user data structure
interface UserData {
  name: string
  id: string
}

//  the props type for AuthProvider
interface AuthProviderProps {
  children: React.ReactNode
}
// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Create a component to provide the context
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [patientResponse, setPatientResponse] =
    useState<PatientResponseData | null>(null)

  const [staffResponse, setStaffResponse] = useState<StaffResponseData | null>(
    null
  )
  const [patient, setPatient] = useState<PatientData | null>(null)
  const [patientErrorMessage, setPatientErrorMessage] = useState<string | null>(
    null
  )
  const [events, setEvents] = useState<Event[]>([])
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const config = {
    headers: { Authorization: `Bearer ${staffResponse?.token}` },
  }

  useEffect(() => {
    // Check if a token is saved in localStorage and set the user accordingly
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    const name = localStorage.getItem('name')
    const loginMode = localStorage.getItem('loginMode')

    if (token && id && name && loginMode === 'patient') {
      const fetchEvents = async () => {
        const events: AxiosResponse<Event[]> = await axios.get(
          `${baseUrl}/events/${id}`
        )

        setPatientResponse({
          user: { id, name },
          loginMode,
          token,
          events: events.data,
        })
      }
      fetchEvents()
    }

    if (token && id && name && loginMode === 'staff') {
      const fetchRoles = async () => {
        const roles: AxiosResponse<number[]> = await axios.get(
          `${baseUrl}/roles/${id}`
        )
        if (roles)
          setStaffResponse({
            token,
            user: { id, name },
            loginMode,
            roles: roles.data,
          })
      }
      fetchRoles()
    }
  }, [])

  const searchEventsApi = async (id: string): Promise<void> => {
    try {
      const response: AxiosResponse<Event[]> = await axios.get(
        `${baseUrl}/events/${id}`
      )

      setEvents(response.data)
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
    }
  }

  const searchLabEventsApi = async (id: string): Promise<void> => {
    try {
      console.log('im here')
      const response: AxiosResponse<Lab[]> = await axios.get(
        `${baseUrl}/staff-query/lab/${id}`
      )
      console.log(response.data)
      setEvents(response.data)
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
    }
  }

  const searchScanEventsApi = async (id: string): Promise<void> => {
    try {
      console.log('im here')
      const response: AxiosResponse<Scan[]> = await axios.get(
        `${baseUrl}/staff-query/scan/${id}`
      )
      console.log(response.data)
      setEvents(response.data)
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
    }
  }

  const searchPrescriptionsApi = async (id: string): Promise<void> => {
    try {
      console.log('im here')
      const response: AxiosResponse<Prescription[]> = await axios.get(
        `${baseUrl}/staff-query/prescription/${id}`
      )
      console.log(response.data)
      setEvents(response.data)
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
    }
  }

  const setEvent = (event: Event) => {
    setSelectedEvent(event)
  }

  const addEntry = async (values: EntryFormValues) => {
    try {
      const response: AxiosResponse<Event> = await axios.post(
        `${baseUrl}/events`,
        values,
        config
      )

      console.log(response.data)
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
    }
  }

  const updateLab = async (values: UpdateLabFormvalues) => {
    try {
      const response: AxiosResponse<Event> = await axios.put(
        `${baseUrl}/staff-query/lab/${values.id}`,
        {
          tests: values.tests,
          staffId: localStorage.getItem('id'),
          comments: values.comments,
        },
        config
      )

      console.log(response.data)
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
    }
  }

  const updateScan = async (values: UpdateScanFormValues) => {
    try {
      const response: AxiosResponse<Event> = await axios.put(
        `${baseUrl}/staff-query/scan/${values.id}`,
        {
          images: values.images,
          staffId: localStorage.getItem('id'),
          comments: values.comments,
        },
        config
      )

      console.log(response.data)
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
    }
  }

  // to log in the patients
  const patientLogin = async ({ username, password }: LoginProps) => {
    try {
      // API endpoint for login
      const response: AxiosResponse<PatientResponseData> = await axios.post(
        `${baseUrl}/patient-login`,
        {
          username,
          password,
        }
      )
      const events: AxiosResponse<Event[]> = await axios.get(
        `${baseUrl}/events/${response.data.user.id}`
      )

      //clear localStorage just in case any information exi
      // Save the token to localStorage
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('name', response.data.user.name)
      localStorage.setItem('id', response.data.user.id.toString())
      localStorage.setItem('loginMode', response.data.loginMode)

      // Set the patient user state
      setTimeout(() => {
        setPatientResponse({
          user: response.data.user,
          loginMode: response.data.loginMode,
          token: response.data.token,
          events: events.data,
        })
      }, 3000)
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
    }
  }

  const searchPatientApi = async (id: string) => {
    try {
      const patient: AxiosResponse<PatientData> = await axios.get(
        `${baseUrl}/staff-query/patients/${id}`
      )
      setPatient(patient.data)
    } catch (error) {
      // Handle  error (e.g., show an error message)
      setPatientErrorMessage(
        'Patient is not found! check if ID no. is correct '
      )
      setPatient(null)
      setTimeout(() => {
        setPatientErrorMessage(null)
      }, 5000)
    }
  }

  const signUp = async ({
    name,
    username,
    password,
    email,
    phoneNumber,
    dateOfBirth,
    address,
    gender,
    bloodType,
  }: PatientProps) => {
    try {
      // Replace with your API endpoint for login
      await axios.post(`${baseUrl}/patient-signup`, {
        name,
        username,
        password,
        email,
        phoneNumber,
        dateOfBirth,
        address,
        gender,
        bloodType,
      })
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
      throw Error()
    }
  }

  // Function to log out the user it works on both user types
  const logout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    localStorage.removeItem('loginMode')
    // Remove the user from state
    setPatientResponse(null)
    setStaffResponse(null)
  }

  const staffLogin = async ({ username, password }: LoginProps) => {
    try {
      // API endpoint for login
      const response: AxiosResponse<StaffResponseData> = await axios.post(
        `${baseUrl}/staff-login`,
        {
          username,
          password,
        }
      )

      // Save the token to localStorage
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('name', response.data.user.name)
      localStorage.setItem('id', response.data.user.id.toString())
      localStorage.setItem('loginMode', response.data.loginMode)

      // Set the user state
      setStaffResponse(response.data)
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        patient,
        patientResponse,
        staffResponse,
        patientErrorMessage,
        events,
        selectedEvent,
        searchPrescriptionsApi,
        searchLabEventsApi,
        searchScanEventsApi,
        addEntry,
        updateLab,
        updateScan,
        setEvent,
        searchEventsApi,
        searchPatientApi,
        patientLogin,
        staffLogin,
        logout,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Create a custom hook for using the context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
