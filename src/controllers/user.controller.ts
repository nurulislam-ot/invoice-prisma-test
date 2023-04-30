import { RequestHandler } from 'express'
import UserModel from '../models/user.model'

interface UserController {
  create: RequestHandler
  update: RequestHandler
  delete: RequestHandler
  getById: RequestHandler
  getAll: RequestHandler
  deleteAll: RequestHandler
}

const userController: UserController = {
  create: async (req, res) => {
    const { name, email, age, password } = req.body
    const user = await UserModel.create({ name, email, password, age })
    return res.json({
      data: user.toJSON(),
    })
  },
  getAll: async (req, res) => {
    const users = await UserModel.findAll()
    return res.json({
      data: users,
    })
  },
  getById: async (req, res) => {
    const userId = req.params.userId

    const user = await UserModel.findOne({ where: { id: userId } })
    if (!user) return res.status(404).json({ data: {} })
    return res.json({
      data: user.toJSON(),
    })
  },
  update: async (req, res) => {
    const userId = req.params.userId

    const user = await UserModel.update(
      {
        ...req.body,
      },
      { where: { id: userId }, returning: true }
    )

    return res.json({ message: `${user[0]} user updated`, data: user[1][0] })
  },
  delete: async (req, res) => {
    const userId = req.params.userId

    const user = await UserModel.destroy({
      where: { id: userId },
    })

    if (user) {
      return res.json({
        message: 'User deleted!',
      })
    }

    return res.json({ error: 'Maybe something wrong!' })
  },
  deleteAll: async (req, res) => {
    await UserModel.truncate()
    return res.json({
      message: 'All user deleted!',
    })
  },
}

export default userController
