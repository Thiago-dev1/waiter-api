import { container } from 'tsyringe'

import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepositoy'
import { CategoriesRepository } from '@modules/products/repositories/implementations/CategoriesRepositoy'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)
