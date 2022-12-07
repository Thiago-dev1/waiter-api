import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListAllProductsUseCase } from './listAllProductsUseCase'

class ListAllProductsController {

  async handle (request: Request, response: Response): Promise<Response> {

    const { categoryId } = request.params

    const listAllProductsUseCase = container.resolve(ListAllProductsUseCase)

    const products = await listAllProductsUseCase.execute(categoryId)

    return response.status(200).json(products)
  }
}

export { ListAllProductsController }
