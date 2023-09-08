import express, { RequestHandler } from 'express'
import { StaffRole } from '../models'

const router = express.Router()

router.get('/:id', (async (req, res, next) => {
  const id = req.params.id
  try {
    const staffRoles = await StaffRole.findAll({
      where: {
        staffId: id,
      },
    })

    const roles: number[] = staffRoles.map((role) => role.roleId)

    res.send(roles)
  } catch (error) {
    // Pass the error to the next middleware for error handling
    next(error)
  }
}) as RequestHandler)

export default router
