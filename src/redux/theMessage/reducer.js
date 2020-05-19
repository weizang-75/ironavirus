import { createReducer } from "@reduxjs/toolkit"

import {
  reset,
  platitudeTop,
  platitudeMiddleA,
  platitudeMiddleB,
  platitudeBottom,
} from "./actions"

export const theMessageSlice = {
  sending: false,
  platitudeTop: `stay alert`,
  platitudeMiddleA: `control`,
  platitudeMiddleB: `the virus`,
  platitudeBottom: `save lives`,
}

const theMessageReducer = createReducer(theMessageSlice, {

  [platitudeTop]: (state, action) => {
    state.platitudeTop = action.platitudeTop
    return state
  },

  [platitudeMiddleA]: (state, action) => {
    state.platitudeMiddleA = action.platitudeMiddleA
    return state
  },

  [platitudeMiddleB]: (state, action) => {
    state.platitudeMiddleB = action.platitudeMiddleB
    return state
  },

  [platitudeBottom]: (state, action) => {
    state.platitudeBottom = action.platitudeBottom
    return state
  },

  [reset]: () => {
    return theMessageSlice
  }
})

export { theMessageReducer }
