import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { reduxBatch } from '@manaflair/redux-batch'
import { appReducer, appSlice } from './app/reducer'
import { userentitiesReducer, userentitiesSlice } from './userentities/reducer'
import { clockworkReducer, clockworkSlice } from './clockwork/reducer'
import { theMessageReducer, theMessageSlice } from './theMessage/reducer'
import { animationReducer, animationSlice } from './animation/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    userentities: userentitiesReducer,
    clockwork: clockworkReducer,
    theMessage: theMessageReducer,
    animation: animationReducer,
  })

  const preloadedState = {
    app: appSlice,
    userentities: userentitiesSlice,
    clockwork: clockworkSlice,
    theMessage: theMessageSlice,
    animation: animationSlice,
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