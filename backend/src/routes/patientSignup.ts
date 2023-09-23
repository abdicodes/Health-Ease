import express, { RequestHandler } from 'express'
import bcrypt from 'bcrypt'
import { Patient } from '../models'
import ShortUniqueId from 'short-unique-id'

const uuid = new ShortUniqueId({ length: 10 })

interface RequestBody {
  username: string
  password: string
  name: string
  email: string
  dateOfBirth: string
  gender: string
  address?: string
  bloodType?: string
  phoneNumber?: string
}

const router = express.Router()

router.post('/', (async (req, res, next) => {
  try {
    if (!(req.body.username && req.body.password)) {
      console.log(req.body.username, req.body.password)
      res.status(401).json({
        error: 'malformed request',
      })
      return
    }
    const {
      username,
      password,
      name,
      email,
      gender,
      dateOfBirth,
      bloodType,
      phoneNumber,
      address,
    } = req.body as RequestBody

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = {
      id: uuid.rnd(),
      username,
      password: passwordHash,
      name,
      email,
      gender,
      dateOfBirth,
      bloodType,
      phoneNumber,
      address,
    }
    const newStaff = await Patient.create(user)
    res.status(201).json(newStaff)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

export default router
