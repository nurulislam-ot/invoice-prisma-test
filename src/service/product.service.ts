import { PrismaClient, Product } from '@prisma/client'

const prisma = new PrismaClient()

interface ProductService {
  createProduct: (product: Product) => Promise<Product>
  getProducts: () => Promise<Product[]>
  updateProductById: (id: string, product: Product) => Promise<Product>
}

const productService: ProductService = {
  async createProduct({ name, price, description, categoryId }) {
    return prisma.product.create({
      data: {
        name,
        price,
        description,
        categoryId,
      },
    })
  },
  async getProducts() {
    const products = await prisma.product.findMany({
      include: {
        category: {
          select: { name: true },
        },
      },
    })
    return products
  },
  async updateProductById(id, product) {
    const updatedProduct = await prisma.product.update({
      data: {
        ...product,
      },
      where: {
        id: parseInt(id),
      },
    })

    return updatedProduct
  },
}

export default productService
