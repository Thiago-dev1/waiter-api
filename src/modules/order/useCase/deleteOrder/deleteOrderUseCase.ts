import { inject, injectable } from 'tsyringe'
import { IOrdersRepository } from '../../repositories/IOrdersRepository'

@injectable()
class DeleteOrderUseCase {
  constructor (
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository
  ) {}

  async execute (idOrder: string): Promise<void> {
    await this.ordersRepository.deleteOrder(idOrder)
  }
}

export { DeleteOrderUseCase }
