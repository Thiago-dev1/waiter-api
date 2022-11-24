import { inject, injectable } from 'tsyringe'

import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepositoy'
import { ICreateCategoryDTO } from '@modules/products/dto/ICreateCategoryDTO'
// import { AppError } from '../../../../errors/AppError'

@injectable()
class CreateCategoryUseCase {
  constructor (
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoriesRepository
  ) { }

  async execute ({ icon, name }: ICreateCategoryDTO): Promise<void | string> {

    const category = await this.categoriesRepository.find(name)

    if (category) {
      return 'Category already exists!'
    }

    this.categoriesRepository.create({ icon, name })
  }
}

export { CreateCategoryUseCase }
