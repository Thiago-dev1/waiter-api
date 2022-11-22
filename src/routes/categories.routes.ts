import { Router } from 'express'

import { CreateCategoryController } from '@modules/products/useCase/createCategory/createCategoryController'

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()

categoriesRoutes.post('/', createCategoryController.handle)
categoriesRoutes.get('/', (request, response) => {
  return response.send('aqui')
})

export { categoriesRoutes }
