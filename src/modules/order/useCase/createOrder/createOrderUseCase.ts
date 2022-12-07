import { inject, injectable } from 'tsyringe'

import { IOrdersRepository } from '../../repositories/IOrdersRepository'
import { ICreateOrder } from '../../dto/ICreateOrder'
import { Order } from '@prisma/client'

@injectable()
class CreateOrderUseCase {
  constructor (
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  async execute ({ products, table }: ICreateOrder): Promise<Order> {
    const order = await this.ordersRepository.create({ products, table })

    return order
    
  }
}

export { CreateOrderUseCase }
