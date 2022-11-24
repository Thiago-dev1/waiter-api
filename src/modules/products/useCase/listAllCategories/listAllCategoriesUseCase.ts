import { Category } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { ICategoriesRepository } from '../../repositories/ICategoriesRepositoy'

@injectable()
class ListAllCategoriesUseCase {
  constructor (
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoriesRepository
  ) {}

  async execute (): Promise<Category[]> {
    const categories = this.categoriesRepository.listAllCategories()

    return categories
  }
}

export { ListAllCategoriesUseCase }
