
interface ICreateProductDTO {
    name: string,
    description: string,
    imagePath: string,
    price: number,
    categoryId: string,
    ingredients: string[]
}

export { ICreateProductDTO }
