import { Order } from '@prisma/client'
import { ICreateOrder } from '../dto/ICreateOrder'

interface IOrdersRepository {
    create({ products, table }: ICreateOrder): Promise<void>
    listAllOrders(): Promise<Order[]>
}

export { IOrdersRepository }
