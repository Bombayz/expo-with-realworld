import { SET_PRODUCTS, SET_CURRENT_PRODUCT } from '../types'
import { types } from 'modules/Categories'

const { SET_CURRENT_CATEGORIES } = types

export const INITIAL_STATE = {
  productsById: {},
  productIds: [],
  productId: '',
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case SET_PRODUCTS:
    return { ...state, ...action.products }
  case SET_CURRENT_CATEGORIES:
    return { ...state, ...INITIAL_STATE }
  case SET_CURRENT_PRODUCT:
    return { ...state, productId: action.id }
  default:
    return state
  }
}
