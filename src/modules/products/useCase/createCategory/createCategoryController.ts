import { Request, Response } from 'express'
import { container } from 'tsyringe'
import z from 'zod'
import { CreateCategoryUseCase } from './createCategoryUseCase'

class CreateCategoryController {
  async handle (request: Request, response: Response): Promise<Response> {
    const createCategory = z.object({
      icon: z.string(),
      name: z.string()
    })

    const { icon, name } = createCategory.parse(request.body)

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

    const res = await createCategoryUseCase.execute({ icon, name })

    if (res) {
      return response.status(400).json({ message: res })
    }

    return response.status(201).send()
  }
}

export { CreateCategoryController }
