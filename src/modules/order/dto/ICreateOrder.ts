
interface ICreateOrder {
    table: string,
    products: [{
        productId?: string,
        quantity?: number
    }]
}

export { ICreateOrder }
