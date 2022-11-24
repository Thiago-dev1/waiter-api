import { Order } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { IOrdersRepository } from '../../repositories/IOrdersRepository'

@injectable()
class ListAllOrdersUseCase {
  constructor (
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository
  ) {}

  async execute (): Promise<Order[]> {
    const orders = await this.ordersRepository.listAllOrders()

    return orders
  }
}

export { ListAllOrdersUseCase }
