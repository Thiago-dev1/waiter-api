import { Order } from '@prisma/client'
import { ICreateOrder } from '../dto/ICreateOrder'

interface IOrdersRepository {
    create({ products, table }: ICreateOrder): Promise<Order>
    listAllOrders(): Promise<Order[]>
    updateStatusOrder(idOrder: string, status: 'DONE' | 'IN_PRODUCTION' | 'WAITING'): Promise<void>
    deleteOrder(idOrder: string): Promise<void>
}

export { IOrdersRepository }
