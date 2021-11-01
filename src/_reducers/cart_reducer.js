import { ADD_BEER, DELETE_BEER } from '../_action/type'

const initialState = {
  beerList: [],
}

export default function cart_reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BEER: {
      console.log(action.payload)
      return { ...state, beerList: [...state.beerList, action.payload] }
    }
    case DELETE_BEER: {
      const filtered = state.beerList.filter((item) => {
        console.log(item.id)
        return item.id !== Number(action.payload)
      })
      console.log(filtered)
      return { ...state, beerList: [...filtered] }
    }

    default:
      return state
  }
}
