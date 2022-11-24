import { Router } from 'express'

import { CreateProductController } from '@modules/products/useCase/createProduct/createProductController'
import { ListAllProductsController } from '@modules/products/useCase/listAllProducts/listAllProductsController'

const productsRoutes = Router()

const createProductController = new CreateProductController()
const listAllProductsController = new ListAllProductsController()

productsRoutes.post('/', createProductController.handle)
productsRoutes.get('/', listAllProductsController.handle)

export { productsRoutes }
