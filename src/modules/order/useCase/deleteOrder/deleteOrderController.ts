import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteOrderUseCase } from './deleteOrderUseCase'

class DeleteOrderController {

  async handle (request: Request, response: Response): Promise<Response> {
    const { idOrder } = request.params

    const deleteOrderUseCase = container.resolve(DeleteOrderUseCase)

    await deleteOrderUseCase.execute(idOrder)
    
    return response.status(200).send()
  }
}

export { DeleteOrderController }
