import { ICreateProductDTO } from '../dto/ICreateProdcutDto'

interface IProductRepository {
    create({ categoryId, description, imagePath, name, prince }: ICreateProductDTO): Promise<void>
}

export { IProductRepository }
