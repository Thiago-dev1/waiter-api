import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListAllOrdersUseCase } from './listAllOrdersUseCase'

class ListAllOrdersController {

  async handle (request: Request, response: Response): Promise<Response> {

    const listAllOrdersUseCase = container.resolve(ListAllOrdersUseCase)

    const orders = await listAllOrdersUseCase.execute()

    return response.status(200).json(orders)

  }
}

export { ListAllOrdersController }
