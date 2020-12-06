import { combineReducers } from "redux";
import { itemsReducer } from "./ItemsReducer";

export default combineReducers({
    items: itemsReducer
})