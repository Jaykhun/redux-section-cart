import {ActionTypes} from "./type";

export const addProduct = (data: object) => {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: data
    }
}

export const deleteProduct = (id: number) => {
    return {
        type: ActionTypes.DELETE_PRODUCT,
        payload: id
    }
}

export const increaseProduct = (id: number) => {
    return {
        type: ActionTypes.INCREASE_PRODUCT,
        payload: id
    }
}

export const decreaseProduct = (id: number) => {
    return {
        type: ActionTypes.DECREASE_PRODUCT,
        payload: id
    }
}