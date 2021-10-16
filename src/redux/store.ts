import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import ideasReducer from './slices/ideasSlice'
import userSlice from './slices/userSlice'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { ideas: ideasReducer, user: userSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware,
    ),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
