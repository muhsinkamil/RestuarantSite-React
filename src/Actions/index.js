import { items } from "../data"

import {
  FETCH_ITEMS,
  FILTER_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from "./types"

export const fetchItems = () => {
  return {
    type: FETCH_ITEMS,
    payload: items,
  }
}

export const filterItems = (allItems, category) => {
  return {
    type: FILTER_ITEMS,
    payload:
      category === "all"
        ? allItems
        : allItems.filter((item) => item.category === category),
  }
}

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  }
}

export const increaseQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: id,
  }
}

export const decreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id,
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  }
}
