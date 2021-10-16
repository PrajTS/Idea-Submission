import { all, fork } from 'redux-saga/effects'
import sagas from './sagas'

const sagasToListenTo = [fork(sagas)]

export default function* rootSaga() {
  yield all(sagasToListenTo)
}
