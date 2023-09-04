import express, { RequestHandler } from 'express'
import Staff from '../models/staff'
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
    const { username, password } = req.body as RequestBody
    const user = await Staff.findOne({
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
    console.log(passwordCorrect)
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
    }
    const token = jwt.sign(userForToken, config.SECRET)

    res
      .status(200)
      .send({ token, username: user.username, name: user.name, id: user.id })
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

export default router
