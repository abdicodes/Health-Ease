// AuthContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Event } from '../types'

const baseUrl: string = 'http://localhost:3001/api'

console.log(baseUrl)
interface LoginProps {
  username: string
  password: string
}
interface PatientSignupProps {
  name: string
  username: string
  password: string
  email: string
  phoneNumber?: string
  dateOfBirth: string
  address?: string
  gender: string
  bloodType?: string
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
  patientResponse: PatientResponseData | null
  staffResponse: StaffResponseData | null
  patientLogin: ({ username, password }: LoginProps) => Promise<void>
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
  }: PatientSignupProps) => Promise<void>
  logout: () => void
}

//  the user data structure
interface UserData {
  name: string
  id: number
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

  useEffect(() => {
    // Check if a token is saved in localStorage and set the user accordingly
    const token = localStorage.getItem('token')
    const id = Number(localStorage.getItem('id'))
    const name = localStorage.getItem('name')
    const loginMode = localStorage.getItem('loginMode')

    if (token && id && name && loginMode === 'patient') {
      const fetchEvents = async () => {
        const events: AxiosResponse<Event[]> = await axios.get(
          `${baseUrl}/events}/${id}`
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
      setPatientResponse({
        user: response.data.user,
        loginMode: response.data.loginMode,
        token: response.data.token,
        events: events.data,
      })
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
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
  }: PatientSignupProps) => {
    try {
      // Replace with your API endpoint for login
      await axios.post('http://localhost:3001/api/patient-signup', {
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
        patientResponse,
        staffResponse,
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
