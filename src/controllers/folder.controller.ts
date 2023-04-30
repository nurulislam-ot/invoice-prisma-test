import { Handler } from 'express'
import FolderModel from '../models/folder.model'

interface FolderController {
  create: Handler
  update: Handler
  delete: Handler
  getAll: Handler
  getFolderById: Handler
}

const folderController: FolderController = {
  async create(req, res) {
    const folderName = req.body.name

    const create = await FolderModel.create({ name: folderName })
    return res.json({
      data: create,
    })
  },
  async update(req, res) {
    const folderId = req.params.id
    const updatedFolderName = req.body.name

    const update = await FolderModel.findByIdAndUpdate(
      folderId,
      {
        name: updatedFolderName,
      },
      { new: true }
    )

    if (update) {
      return res.json({
        data: update,
      })
    }

    return res.status(404).json({
      error: {
        message: 'Folder Not Found!',
      },
    })
  },
  async delete(req, res) {
    const folderId = req.params.id

    const deleteFolder = await FolderModel.findByIdAndDelete(folderId)

    if (deleteFolder) {
      return res.json({
        message: `${deleteFolder.name} Deleted!`,
      })
    }

    return res.status(404).json({
      error: {
        message: 'Folder Not Found!',
      },
    })
  },
  async getAll(req, res) {
    const folders = await FolderModel.find()
    return res.json({
      data: folders,
    })
  },
  async getFolderById(req, res) {
    const folderId = req.params.id

    const folder = await FolderModel.findById(folderId)
    return res.json({
      data: folder,
    })
  },
}

export default folderController
