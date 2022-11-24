import { Category } from '@prisma/client'
import { ICreateCategoryDTO } from '../dto/ICreateCategoryDTO'

interface ICategoriesRepository {
    create({ icon, name }: ICreateCategoryDTO): Promise<void>
    find(name: string): Promise<Category>
    listAllCategories(): Promise<Category[]>
}

export { ICategoriesRepository }
