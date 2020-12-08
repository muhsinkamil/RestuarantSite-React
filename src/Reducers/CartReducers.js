import { ADD_ITEM, REMOVE_ITEM } from "../Actions/types"

import _ from "lodash"

export const cartReducer = (state = { items: {}, total: 0 }, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: { ...state.items, [action.payload.id]: { ...action.payload, quantity: 1} },
        total: state.total + action.payload.price,
      }

    // return { ..._.mapKeys(action.payload, function(item){ return item.id }}
    // case REMOVE_ITEM:
    //     return { ...state, }
    default:
      return state
  }
}
