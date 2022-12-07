import { ICreateProductDTO } from '@modules/products/dto/ICreateProdcutDTO'
import { IProductRepository } from '../IProductsRepository'

import { prisma } from '../../../../lib/prisma'
import { Product } from '@prisma/client'

class ProductsRepository implements IProductRepository {
  
  async listAllProducts (categoryId?: string): Promise<Product[]> {

    if (categoryId?.length > 0) {
      const products = await prisma.product.findMany({
        where: {
          categoryId
        },
        include: {
          Category: true,
          Ingredients: true
        }
      })

      return products

    } else {
      const products = await prisma.product.findMany({
        include: {
          Category: true,
          Ingredients: true
        }
      })

      return products

    }
 
  }

  async create ({ categoryId, description, imagePath, name, price, ingredients }: ICreateProductDTO): Promise<void> {
    
    await prisma.product.create({
      data: {
        description,
        imagePath,
        name,
        price,
        categoryId,
        Ingredients: {
          connect: ingredients.map(i => ({ id: i }))
        }
      }
    })

  }

}

export { ProductsRepository }
