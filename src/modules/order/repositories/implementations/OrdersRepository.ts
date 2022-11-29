import { IOrdersRepository } from '../IOrdersRepository'

import { prisma } from '../../../../lib/prisma'
import { ICreateOrder } from '@modules/order/dto/ICreateOrder'
import { Order } from '@prisma/client'

class OrdersRepository implements IOrdersRepository {
  async listAllOrders (): Promise<Order[]> {
    const orders = await prisma.order.findMany({
      include: {
        request: {
          select: {
            products: true,
            quantity: true
          }
        }
      }
    })

    orders.map(item => item.request.products.map((i, index) => console.log(i.prince * item.request.quantity[index])))

    return orders
    
  }

  async create ({ products, table }: ICreateOrder): Promise<void> {

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
  
    await prisma.order.create({
      data: {
        table,
        request: {
          create: {
            products: {
              connect: products.map(item => ({ id: item.productId })) 
            },
            quantity: products.map(item => item.quantity)
          }
        }
      }
    })
  }

}

export { OrdersRepository }
