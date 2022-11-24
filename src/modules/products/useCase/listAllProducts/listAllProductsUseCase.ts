import { Product } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { IProductRepository } from '../../repositories/IProductsRepository'

@injectable()
class ListAllProductsUseCase {
  constructor (
        @inject('ProductsRepository')
        private productRepository: IProductRepository
  ) {}

  async execute (): Promise<Product[]> {
    const products = this.productRepository.listAllProducts()

    return products
  }
}

export { ListAllProductsUseCase }
