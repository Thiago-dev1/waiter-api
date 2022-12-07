import { Product } from '@prisma/client'
import { ICreateProductDTO } from '../dto/ICreateProdcutDTO'

interface IProductRepository {
    create({ categoryId, description, imagePath, name, price, ingredients }: ICreateProductDTO): Promise<void>
    listAllProducts(categoryId?: string): Promise<Product[]>
}

export { IProductRepository }
