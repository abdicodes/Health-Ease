// AuthContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Event } from '../types'
interface LoginProps {
  username: string
  password: string
}
interface SignupProps {
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
interface ResponseData {
  user: UserData
  token: string
  loginMode: string
  events: Event[]
}

//  the user context
interface AuthContextType {
  response: ResponseData | null
  login: ({ username, password }: LoginProps) => Promise<void>
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
  }: SignupProps) => Promise<void>
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
  const [response, setResponse] = useState<ResponseData | null>(null)

  useEffect(() => {
    // Check if a token is saved in localStorage and set the user accordingly
    const token = localStorage.getItem('token')
    const id = Number(localStorage.getItem('id'))
    const name = localStorage.getItem('name')
    const loginMode = localStorage.getItem('loginMode')

    if (token && id && name && loginMode) {
      const fetchEvents = async () => {
        const events: AxiosResponse<Event[]> = await axios.get(
          'http://localhost:3001/api/events/3'
        )
        console.log(events.data)
        setResponse({
          user: { id, name },
          loginMode,
          token,
          events: events.data,
        })
      }
      fetchEvents()
    }
  }, [])

  // Function to log in the user
  const login = async ({ username, password }: LoginProps) => {
    try {
      // Replace with your API endpoint for login
      const response: AxiosResponse<ResponseData> = await axios.post(
        'http://localhost:3001/api/patient-login',
        {
          username,
          password,
        }
      )
      const events: AxiosResponse<Event[]> = await axios.get(
        'http://localhost:3001/api/events/3'
      )
      console.log(response.data)
      // Save the token to localStorage
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('name', response.data.user.name)
      localStorage.setItem('id', response.data.user.id.toString())
      localStorage.setItem('loginMode', response.data.loginMode)

      // Set the user state
      setResponse(response.data)
      setResponse({
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
  }: SignupProps) => {
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
      const response2 = await axios.get('http://localhost:3001/api/events/1')
      console.log(response2)
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error)
    }
  }

  // Function to log out the user
  const logout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    localStorage.removeItem('loginMode')
    // Remove the user from state
    setResponse(null)
  }

  return (
    <AuthContext.Provider value={{ response, login, logout, signUp }}>
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
