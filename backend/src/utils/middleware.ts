import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import config from './config'
import { Patient, Staff } from '../models'

interface RequestWithToken extends Request {
  token?: string
  user?: Patient | Staff | null
}

interface UserForToken {
  username: string
  id: string
  loginMode: 'staff' | 'patient'
}

const tokenExtractor = (
  req: RequestWithToken,
  _res: Response,
  next: NextFunction
) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7)
  }
  next()
}

const userExtractor = async (
  req: RequestWithToken,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!config.SECRET) {
      res.status(500).json({ error: 'Server error please contact the admin' })
      return
    }

    if (!req.token) {
      res.status(401).json({ error: 'token is missing' })
      return
    }

    const decodedToken: UserForToken = jwt.verify(
      req.token,
      config.SECRET
    ) as UserForToken

    if (!decodedToken.id) {
      res.status(401).json({ error: 'token missing or invalid' })
      return
    }

    const { id, loginMode } = decodedToken

    if (loginMode === 'staff') {
      const user = await Staff.findByPk(id)

      if (!user) {
        res.status(404).json({ error: 'user not found!' })
        return
      }
      req.user = user
    }

    if (loginMode === 'patient') {
      const user = await Patient.findByPk(id)

      if (!user) {
        res.status(404).json({ error: 'user not found!' })
        return
      }
      req.user = user
    }

    next()
  } catch (error) {
    next(error)
  }
}

const asyncMiddlewareWrapper = (
  fn: (
    req: RequestWithToken,
    res: Response,
    next: NextFunction
  ) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req as RequestWithToken, res, next).catch(next)
  }
}

const unknownEndpoint = (_req: Request, res: Response) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (
  error: Error,
  _request: Request,
  _response: Response,
  next: NextFunction
) => {
  console.error(error.message)

  next(error)
}

export {
  unknownEndpoint,
  errorHandler,
  tokenExtractor,
  userExtractor,
  asyncMiddlewareWrapper,
}
