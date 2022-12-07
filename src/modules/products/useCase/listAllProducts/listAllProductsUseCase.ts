import { Product } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { IProductRepository } from '../../repositories/IProductsRepository'

@injectable()
class ListAllProductsUseCase {
  constructor (
        @inject('ProductsRepository')
        private productRepository: IProductRepository
  ) {}

  async execute (categoryId?: string): Promise<Product[]> {
    const products = this.productRepository.listAllProducts(categoryId)

    return products
  }

}

export { ListAllProductsUseCase }
