import { Request, Response } from 'express'
import { container } from 'tsyringe'
import z from 'zod'
import { CreateProductUseCase } from './createProductUseCase'

class CreateProductController {
  async handle (request: Request, response: Response): Promise<Response> {
    const createCategory = z.object({
      categoryId: z.string(),
      description: z.string(),
      imagePath: z.string(),
      name: z.string(),
      prince: z.number(),
      ingredients: z.array(z.string())
    })

    const { categoryId, description, imagePath, name, prince, ingredients } = createCategory.parse(request.body)

    const createProductUseCase = container.resolve(CreateProductUseCase)

    const res = await createProductUseCase.execute({ categoryId, description, imagePath, name, prince, ingredients })

    if (res) {
      return response.status(400).json({ message: res })
    }

    return response.status(201).send()
  }
}

export { CreateProductController }
