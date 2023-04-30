import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const prisma = new PrismaClient()

const client = Router()
client
  .route('/')
  .post(async (req, res) => {
    const client = await prisma.client.create({
      data: req.body,
    })

    return res.json({
      message: 'client created',
      data: client,
    })
  })
  .get(async (req, res) => {
    const clients = await prisma.client.findMany()

    return res.json({
      data: clients,
    })
  })

client.get('/', async (req, res) => {})

export default client
