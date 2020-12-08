import { combineReducers } from "redux";
import { itemsReducer } from "./ItemsReducer";
import { cartReducer } from './CartReducers'

export default combineReducers({
    items: itemsReducer,
    cartItems: cartReducer
})