import { Request, Response } from 'express'
import z from 'zod'
import { container } from 'tsyringe'
import { UpdateOrderUseCase } from './updateOrderUseCase'

class UpdateOrderController {

  async handle (request: Request, response: Response): Promise<Response> {

    const values = ['DONE', 'IN_PRODUCTION', 'WAITING'] as const

    const updateOrderBody = z.object({
      status: z.enum(values)
    })

    const { status } = updateOrderBody.parse(request.body)
    const { idOrder } = request.params

    const updateOrderUseCase = container.resolve(UpdateOrderUseCase)

    await updateOrderUseCase.execute(idOrder, status)

    return response.status(200).send()
  }
}

export { UpdateOrderController }
