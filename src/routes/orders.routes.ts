import { Router } from 'express'

import { CreateOrderController } from '@modules/order/useCase/createOrder/createOrderController'
import { ListAllOrdersController } from '@modules/order/useCase/listAllOrders/listAllOrdersController'

const ordersRoutes = Router()

const createOrderController = new CreateOrderController()
const listAllOrdersController = new ListAllOrdersController()

ordersRoutes.post('/', createOrderController.handle)
ordersRoutes.get('/', listAllOrdersController.handle)

export { ordersRoutes }
