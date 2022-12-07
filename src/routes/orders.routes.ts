import { Router } from 'express'

import { CreateOrderController } from '@modules/order/useCase/createOrder/createOrderController'
import { ListAllOrdersController } from '@modules/order/useCase/listAllOrders/listAllOrdersController'
import { UpdateOrderController } from '@modules/order/useCase/updateOrder/updateOrderController'
import { DeleteOrderController } from '@modules/order/useCase/deleteOrder/deleteOrderController'

const ordersRoutes = Router()

const createOrderController = new CreateOrderController()
const listAllOrdersController = new ListAllOrdersController()
const updateOrderController = new UpdateOrderController()
const deleteOrderController = new DeleteOrderController()

ordersRoutes.post('/', createOrderController.handle)
ordersRoutes.patch('/status/:idOrder', updateOrderController.handle)
ordersRoutes.get('/', listAllOrdersController.handle)
ordersRoutes.delete('/:idOrder', deleteOrderController.handle)

export { ordersRoutes }
