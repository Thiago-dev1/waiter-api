import { inject, injectable } from 'tsyringe'

import { IProductRepository } from '@modules/products/repositories/IProductsRepository'
import { ICreateProductDTO } from '@modules/products/dto/ICreateProdcutDTO'
// import { AppError } from '../../../../errors/AppError'

@injectable()
class CreateProductUseCase {
  constructor (
        @inject('ProductsRepository')
        private productsRepository: IProductRepository
  ) { }

  async execute ({ categoryId, description, imagePath, name, price, ingredients }: ICreateProductDTO): Promise<void | string> {

    // const category = await this.productsRepository.find(name)

    // if (category) {
    //   return 'Category already exists!'
    // }

    this.productsRepository.create({ categoryId, description, imagePath, name, price, ingredients })
  }
}

export { CreateProductUseCase }
