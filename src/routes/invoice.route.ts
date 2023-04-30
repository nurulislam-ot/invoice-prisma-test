import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const prisma = new PrismaClient()

const invoice = Router()
invoice.route('/').post(async (req, res) => {
  const invoice = await prisma.invoice.create({
    data: req.body,
  })

  return res.json({
    message: 'invoice created',
    data: invoice,
  })
})

invoice.get('/', async (req, res) => {})

export default invoice
