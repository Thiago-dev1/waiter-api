import { Product } from '@prisma/client'
import { ICreateProductDTO } from '../dto/ICreateProdcutDTO'

interface IProductRepository {
    create({ categoryId, description, imagePath, name, prince, ingredients }: ICreateProductDTO): Promise<void>
    listAllProducts(): Promise<Product[]>
}

export { IProductRepository }
