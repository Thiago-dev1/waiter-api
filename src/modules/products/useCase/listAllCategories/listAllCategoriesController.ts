import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListAllCategoriesUseCase } from './listAllCategoriesUseCase'

class ListAllCategoriesController {

  async handle (request: Request, response: Response): Promise<Response> {

    const listAllCategoriesUseCase = container.resolve(ListAllCategoriesUseCase)

    const categories = await listAllCategoriesUseCase.execute()

    return response.status(200).json(categories)
  }
}

export { ListAllCategoriesController }
