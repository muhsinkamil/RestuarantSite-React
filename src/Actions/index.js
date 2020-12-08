import items from "../data"

import { FETCH_ITEMS, FILTER_ITEMS, ADD_ITEM, REMOVE_ITEM } from "./types"

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
    payload: item
  }
}

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  }
}
