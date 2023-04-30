import { RequestHandler } from 'express'
import productService from '../service/product.service'

interface PostController {
  postProduct: RequestHandler
  putProduct: RequestHandler
  getProducts: RequestHandler
  getProductById: RequestHandler
  updateProductById: RequestHandler
  deleteProductById: RequestHandler
}

const postController: PostController = {
  async postProduct(req, res) {
    const product = await productService.createProduct(req.body)

    return res.json({
      message: 'Product created!',
      data: product,
    })
  },

  async putProduct(req, res) {
    const productId = req.params.id

    const product = await productService.updateProductById(productId, req.body)

    return res.json({ message: 'Product updated successfully', data: product })
  },
  async getProducts(req, res) {
    const products = await productService.getProducts()

    return res.json({
      data: products,
    })
  },
  async getProductById(req, res) {},
  async updateProductById(req, res) {},
  async deleteProductById(req, res) {},
}

export default postController
