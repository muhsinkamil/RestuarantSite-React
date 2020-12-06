import items from '../data'

import {
    FETCH_ITEMS,
    FILTER_ITEMS
} from './types'

export const fetchItems = () => {
    return {
        type: FETCH_ITEMS,
        payload: items
    }
}

export const filterItems = (allItems, category) => {
    return {
        type: FILTER_ITEMS,
        payload: category === 'all' ? allItems : allItems.filter(item => item.category === category)
    }
}