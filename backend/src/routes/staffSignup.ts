import express, { RequestHandler } from 'express'
import Staff from '../models/staff'
import bcrypt from 'bcrypt'
import { uuid } from 'uuidv4'

interface RequestBody {
  username: string
  password: string
  name: string
  email: string
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
    const { username, password, name, email } = req.body as RequestBody

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = {
      id: uuid(),
      username,
      name,
      password: passwordHash,
      email,
    }
    const newStaff = await Staff.create(user)
    res.status(201).json(newStaff)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

export default router
