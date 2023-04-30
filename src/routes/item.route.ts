import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const prisma = new PrismaClient()

const item = Router()
item
  .route('/')
  .post(async (req, res) => {
    const item = await prisma.item.create({
      data: req.body,
    })

    return res.json({
      message: 'item created',
      data: item,
    })
  })
  .get(async (req, res) => {
    const items = await prisma.item.findMany()

    return res.json({
      data: items,
    })
  })

export default item
