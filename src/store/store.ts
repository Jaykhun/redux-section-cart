import {createStore} from "redux";
import {CartReducer} from "./reducers";

export const store = createStore(CartReducer)