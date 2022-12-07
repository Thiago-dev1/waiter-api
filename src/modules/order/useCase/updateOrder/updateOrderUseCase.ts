import { inject, injectable } from 'tsyringe'
import { IOrdersRepository } from '../../repositories/IOrdersRepository'

@injectable()
class UpdateOrderUseCase {

  constructor (
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository
  ) {}

  async execute (idOrder: string, status: 'DONE' | 'IN_PRODUCTION' | 'WAITING'): Promise<void> {
    await this.ordersRepository.updateStatusOrder(idOrder, status)
  }
}

export { UpdateOrderUseCase }
