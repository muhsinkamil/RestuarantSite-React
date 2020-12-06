import {
    FETCH_ITEMS,
    FILTER_ITEMS
} from '../Actions/types'

export const itemsReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_ITEMS:
            return { allItems: action.payload, filteredItems: action.payload }

        case FILTER_ITEMS:
            return { ...state, filteredItems: action.payload }

        default:
            return state
    }
}