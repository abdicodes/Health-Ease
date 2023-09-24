import express, { RequestHandler } from 'express'
import Patient from '../models/patient'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../utils/config'

interface RequestBody {
  username: string
  password: string
}

interface UserForToken {
  username: string
  id: string
  loginMode: string
}

const router = express.Router()

router.post('/', (async (req, res, next) => {
  try {
    if (!(req.body.username && req.body.password)) {
      res.status(401).json({
        error: 'malformed request',
      })
      return
    }
    const { username, password } = req.body as RequestBody
    const user = await Patient.findOne({
      where: {
        username: username,
      },
    })

    if (!(user && user.id)) {
      res.status(404).json({
        error: 'user not found!',
      })
      return
    }

    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.password)

    if (!(user && passwordCorrect)) {
      res.status(401).json({
        error: 'invalid username or password',
      })
      return
    }

    const id: string = user.id.toString()

    const userForToken: UserForToken = {
      username: user.username,
      id: id,
      loginMode: 'patient',
    }
    const token = jwt.sign(userForToken, config.SECRET)

    res.status(200).send({
      user: { id: user.id, name: user.name },
      token,
      loginMode: 'patient',
    })
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

export default router
