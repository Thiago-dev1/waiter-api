
import { IOrdersRepository } from '../IOrdersRepository'

import { prisma } from '../../../../lib/prisma'
import { ICreateOrder } from '@modules/order/dto/ICreateOrder'
import { Order } from '@prisma/client'

interface Test {
  quantity: number;
  productId: string
}

class OrdersRepository implements IOrdersRepository {
  
  async deleteOrder (idOrder: string): Promise<void> {
    await prisma.order.delete({
      where: {
        id: idOrder
      }
    })
  }
 
  async updateStatusOrder (idOrder: string, status: 'DONE' | 'IN_PRODUCTION' | 'WAITING'): Promise<void> {

    await prisma.order.update({
      where: {
        id: idOrder
      },
      data: {
        status
      }
    })
  }

  async listAllOrders (): Promise<Order[]> {
    const orders = await prisma.order.findMany({
      
    })

    // orders.map(item => item.request.products.map((i, index) => console.log(i.prince * item.request.quantity[index])))

    // orders.map(item => item.request.products.map((i, index) => console.log(i.prince * item.request.quantity[index])))

    return orders  
  }

  async create ({ products, table }: ICreateOrder): Promise<Order> {

    // const pedido = await prisma.request.create({
    //   data: {
    //     products: {
    //       connect: products.map(item => ({ id: item.productId })) 
    //     },
    //     quantity: products.map(item => item.quantity)
    //   }
    // })
  
    // await prisma.order.create({
    //   data: {
    //     table,
    //     requestId: pedido.id
    //   }
    // })
  
    const order = await prisma.order.create({
      data: {
        request: products,
        table 
      }
    })

    return order

  }

}

export { OrdersRepository }
