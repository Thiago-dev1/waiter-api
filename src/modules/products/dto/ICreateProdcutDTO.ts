
interface ICreateProductDTO {
    name: string,
    description: string,
    imagePath: string,
    prince: number,
    categoryId: string,
    ingredients: string[]
}

export { ICreateProductDTO }
