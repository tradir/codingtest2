import { ADD_BEER, DELETE_BEER } from './type'

export const addBeerToCart = (data) => {
  return {
    type: ADD_BEER,
    payload: data,
    message: 'ok',
  }
}

export const deleteBeer = (id) => {
  return {
    type: DELETE_BEER,
    payload: id,
  }
}
