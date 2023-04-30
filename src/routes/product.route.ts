import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import postController from '../controllers/post.controller'

const prisma = new PrismaClient()

const productRoute = Router()

productRoute
  .route('/')
  .post(postController.postProduct)
  .get(postController.getProducts)

productRoute
  .route('/:productId')
  .put(postController.putProduct)
  .delete(async (req, res, next) => {
    try {
      const productId = req.params.productId
      const deleteProduct = await prisma.product.delete({
        where: { id: parseInt(productId) },
      })
      return res.json({
        message: `${deleteProduct.name} named product deleted`,
      })
    } catch (error) {
      return next(error)
    }
  })

export default productRoute
