import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import storageSession from "redux-persist/lib/storage/session";
import cart from './cart_reducer'
import table from './table_reducer'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart', 'table'],
}

const rootReducer = combineReducers({
  cart,
  table,
})

export default persistReducer(persistConfig, rootReducer)
