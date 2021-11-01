import { combineReducers } from 'redux'
import cart from '../reducers/cart'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  cart,
})

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer)
