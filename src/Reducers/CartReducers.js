import {
  ADD_ITEM,
  CLEAR_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from "../Actions/types"

import _ from "lodash"

const initialState = { items: {}, total: 0 }

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: { ...action.payload, quantity: 1 },
        },
        total: state.total + action.payload.price,
      }

    case INCREASE_QUANTITY:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            quantity: state.items[action.payload].quantity + 1,
          },
        },
        total: state.total + state.items[action.payload].price,
      }

    case DECREASE_QUANTITY:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            quantity: state.items[action.payload].quantity - 1,
          },
        },
        total: state.total - state.items[action.payload].price,
      }

    case REMOVE_ITEM:
      return {
        ...state,
        items: _.omit(state.items, action.payload),
        total:
          state.total -
          state.items[action.payload].quantity *
            state.items[action.payload].price,
      }

    case CLEAR_CART:
      return { items: {}, total: 0 }

    default:
      return state
  }
}
