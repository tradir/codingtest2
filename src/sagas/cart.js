import axios from 'axios'
import {
  all,
  delay,
  fork,
  put,
  takeLatest,
  takeEvery,
  call,
} from 'redux-saga/effects'
import {
  ADD_BEER_FAILURE,
  ADD_BEER_REQUEST,
  ADD_BEER_SUCCESS,
  REMOVE_BEER_FAILURE,
  REMOVE_BEER_REQUEST,
  REMOVE_BEER_SUCCESS,
} from '../reducers/cart'

function addBeerAPI(data) {
  return axios.get(' https://api.punkapi.com/v2/beers')
}

function* addBeer(action) {
  // try {
  console.log(333, action)
  const result = yield call(addBeerAPI)
  // console.log(222222)
  // yield delay(1000)
  yield put({
    type: ADD_BEER_SUCCESS,
    data: result,
  })
  // } catch (err) {
  //   console.error(err)
  //   yield put({
  //     type: ADD_BEER_FAILURE,
  //     data: err.response.data,
  //   })
  // }
}

function* removeBeer(action) {
  try {
    yield delay(1000)
    yield put({
      type: REMOVE_BEER_SUCCESS,
      data: action.data,
    })
  } catch (err) {
    yield put({
      type: REMOVE_BEER_FAILURE,
      data: 'saga: remove err',
    })
  }
}

function* watchAddBeer() {
  yield takeEvery(ADD_BEER_REQUEST, addBeer)
}

function* watchRemoveBeer() {
  yield takeLatest(REMOVE_BEER_REQUEST, removeBeer)
}

export default function* cartSaga() {
  yield all([watchAddBeer(), watchRemoveBeer()])
}
