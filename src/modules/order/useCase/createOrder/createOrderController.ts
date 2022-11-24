import { Request, Response } from 'express'
import { container } from 'tsyringe'
import z, { array } from 'zod'

import { CreateOrderUseCase } from './createOrderUseCase'

class CreateOrderController {
  
  async handle (request: Request, response: Response): Promise<Response> {
    // const createOrder = z.object({
    //   table: z.string(),
    //   products: array(z.object({
    //     productId: z.string(),
    //     quantity: z.number()
    //   }))
    // })

    // const { table, products } = createOrder.parse(request.body)

    const { table, products } = request.body

    const createOrderUseCase = container.resolve(CreateOrderUseCase)

    await createOrderUseCase.execute({ table, products })

    return response.status(201).send()
  }
}

export { CreateOrderController }
