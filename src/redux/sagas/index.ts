import { all, fork } from 'redux-saga/effects'
import { watcherSaga } from './sagas'

const rootSaga = function* root() {
  yield all([fork(watcherSaga)])
}

export default rootSaga
