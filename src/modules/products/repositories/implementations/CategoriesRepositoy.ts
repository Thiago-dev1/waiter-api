import { ICreateCategoryDTO } from '@modules/products/dto/ICreateCategoryDTO'
import { ICategoriesRepository } from '../ICategoriesRepositoy'

import { prisma } from '../../../../lib/prisma'
import { Category } from '@prisma/client'

class CategoriesRepository implements ICategoriesRepository {
  
  async find (name: string): Promise<Category> {
    const category = await prisma.category.findUnique({
      where: {
        name
      }
    })

    return category
  }
  
  async create ({ icon, name }: ICreateCategoryDTO): Promise<void> {
    await prisma.category.create({
      data: {
        icon,
        name
      }
    })
  }
}

export { CategoriesRepository }
