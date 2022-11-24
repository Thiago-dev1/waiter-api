import { ICreateProductDTO } from '@modules/products/dto/ICreateProdcutDTO'
import { IProductRepository } from '../IProductsRepository'

import { prisma } from '../../../../lib/prisma'
import { Product } from '@prisma/client'

class ProductsRepository implements IProductRepository {
  
  async listAllProducts (): Promise<Product[]> {
    const products = await prisma.product.findMany({
      include: {
        Category: true,
        Ingredients: {
          select: {
            name: true
          }
        }
      }
    })

    return products
  }

  async create ({ categoryId, description, imagePath, name, prince, ingredients }: ICreateProductDTO): Promise<void> {
    
    await prisma.product.create({
      data: {
        description,
        imagePath,
        name,
        prince,
        categoryId,
        Ingredients: {
          connect: ingredients.map(i => ({ id: i }))
        }
      }
    })

  }

}

export { ProductsRepository }
