import { Router } from 'express'
import folderController from '../controllers/folder.controller'

const folderRouter = Router()

folderRouter
  .route('/')
  .get(folderController.getAll)
  .post(folderController.create)
folderRouter
  .route('/:id')
  .get(folderController.getFolderById)
  .put(folderController.update)
  .delete(folderController.delete)

export default folderRouter
