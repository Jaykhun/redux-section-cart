export type initialState = any[]

export type Action = AddProduct | DeleteProduct | IncreaseProduct | DecreaseProduct

export interface IProduct {
    id: number,
    title: string,
    image: string,
    price: number,
    count: number
}

export interface ProductsProps {
    product: IProduct
}

export interface CartProps {
    product: IProduct
}

export enum ActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    INCREASE_PRODUCT = 'INCREASE_PRODUCT',
    DECREASE_PRODUCT = 'DECREASE_PRODUCT'
}

export interface AddProduct {
    type: ActionTypes.ADD_PRODUCT,
    payload: object
}

export interface DeleteProduct {
    type: ActionTypes.DELETE_PRODUCT,
    payload: number
}

export interface IncreaseProduct {
    type: ActionTypes.INCREASE_PRODUCT,
    payload: number
}

export interface DecreaseProduct {
    type: ActionTypes.DECREASE_PRODUCT,
    payload: number
}

