import { Router } from 'express'

import { CreateCategoryController } from '@modules/products/useCase/createCategory/createCategoryController'
import { ListAllCategoriesController } from '@modules/products/useCase/listAllCategories/listAllCategoriesController'

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()
const listAllCategoriesController = new ListAllCategoriesController()

categoriesRoutes.post('/', createCategoryController.handle)
categoriesRoutes.get('/', listAllCategoriesController.handle)

export { categoriesRoutes }
