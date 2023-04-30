import { Router } from 'express'
import userController from '../controllers/user.controller'

const userRouter = Router()

userRouter
  .route('/')
  .post(userController.create)
  .get(userController.getAll)
  .delete(userController.deleteAll)
userRouter
  .route('/:userId')
  .get(userController.getById)
  .put(userController.update)
  .delete(userController.delete)

export default userRouter
