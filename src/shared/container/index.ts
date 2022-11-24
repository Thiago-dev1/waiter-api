import { container } from 'tsyringe'

import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepositoy'
import { CategoriesRepository } from '@modules/products/repositories/implementations/CategoriesRepositoy'
import { IProductRepository } from '@modules/products/repositories/IProductsRepository'
import { ProductsRepository } from '@modules/products/repositories/implementations/ProductsRepository'
import { IOrdersRepository } from '@modules/order/repositories/IOrdersRepository'
import { OrdersRepository } from '@modules/order/repositories/implementations/OrdersRepository'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)

container.registerSingleton<IProductRepository>(
  'ProductsRepository',
  ProductsRepository
)

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository
)
