import { inject, injectable } from 'tsyringe'

import { IOrdersRepository } from '../../repositories/IOrdersRepository'
import { ICreateOrder } from '../../dto/ICreateOrder'

@injectable()
class CreateOrderUseCase {
  constructor (
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) {}

  async execute ({ products, table }: ICreateOrder): Promise<void> {
    await this.ordersRepository.create({ products, table })
  }
}

export { CreateOrderUseCase }
