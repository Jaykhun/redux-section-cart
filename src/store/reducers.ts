import {Action, ActionTypes, initialState} from "./type";

const products: initialState = []

export const CartReducer = (state: initialState = products, action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT:
            return state.concat([action.payload])
        case ActionTypes.DELETE_PRODUCT:
            return state.filter(product => product.id !== action.payload)
        case ActionTypes.INCREASE_PRODUCT:
            return state.map(product => (
                (product.id === action.payload)
                    ? {...product, count: product.count + 1}
                    : product
            ))
        case ActionTypes.DECREASE_PRODUCT:
            return state.map(product => (
                (product.id === action.payload)
                    ? {...product, count: product.count - 1}
                    : product
            ))
        default:
            return state
    }
}
