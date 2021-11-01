export const initialState = {
  BeerLists: [],
  addBeerLoading: false,
  addBeerSuccess: false,
  addBeerError: null,
  removeBeerLoading: false,
  removeBeerSuccess: false,
  removeBeerError: null,
}

export const ADD_BEER_REQUEST = 'ADD_BEER_REQUEST'
export const ADD_BEER_SUCCESS = 'LOAD_BEER_SUCCESS'
export const ADD_BEER_FAILURE = 'ADD_BEER_FAILURE'

export const REMOVE_BEER_REQUEST = 'REMOVE_BEER_REQUEST'
export const REMOVE_BEER_SUCCESS = 'REMOVE_BEER_SUCCESS'
export const REMOVE_BEER_FAILURE = 'REMOVE_BEER_FAILURE'

export const addCart = (data) => {
  console.log(222)
  return {
    type: ADD_BEER_REQUEST,
    data,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BEER_REQUEST:
      console.log('리듀서', action)
      return {
        ...state,
        addBeerLoading: true,
        addBeerSuccess: false,
        addBeerError: null,
      }
    case ADD_BEER_SUCCESS:
      console.log('리듀서1', action)
      return {
        ...state,
        addBeerLoading: false,
        addBeerSuccess: true,
        addBeerError: null,
        BeerLists: [...state.BeerLists, action.data],
      }
    case ADD_BEER_FAILURE:
      return {
        ...state,
        addBeerLoading: false,
        addBeerSuccess: false,
        addBeerError: null,
      }
    case REMOVE_BEER_REQUEST:
      return {
        ...state,
        addBeerLoading: true,
        addBeerSuccess: false,
        addBeerError: null,
      }
    case REMOVE_BEER_SUCCESS:
      return {
        ...state,
        addBeerLoading: false,
        addBeerSuccess: true,
        addBeerError: null,
      }
    case REMOVE_BEER_FAILURE:
      return {
        ...state,
        addBeerLoading: false,
        addBeerSuccess: false,
        addBeerError: null,
      }
    default: {
      return {
        ...state,
      }
    }
  }
}
