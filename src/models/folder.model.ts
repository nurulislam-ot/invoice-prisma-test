import mongoose from 'mongoose'
import Folder from '../interfaces/folder'

const schema = new mongoose.Schema<Folder>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
})

export default mongoose.model<Folder>('Folder', schema)
