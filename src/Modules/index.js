// import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
// import cart from '../reducers/cart'
import cartSaga from '../sagas/cart'
//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from 'immer'
// import storage from 'redux-persist/lib/storage'
// import { persistReducer } from 'redux-persist'

enableES5()

// const persistConfig = {
//   key: 'root',
//   storage: storage,
// }

// const rootReducer = combineReducers({
//   cart,
// })

// export default rootReducer;
// export default persistReducer(persistConfig, rootReducer)

//wathcer saga
export function* rootSaga() {
  yield all([fork[cartSaga]])
}
