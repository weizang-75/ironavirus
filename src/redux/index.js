import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { reduxBatch } from '@manaflair/redux-batch'
import { appReducer, appSlice } from './app/reducer'
import { theMessageReducer, theMessageSlice } from './theMessage/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    theMessage: theMessageReducer,
  })

  const preloadedState = {
    app: appSlice,
    theMessage: theMessageSlice,
  }
  
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
    middleware,
    preloadedState,
    enhancers: [reduxBatch]
  })
  return store
}

export default reduxStore