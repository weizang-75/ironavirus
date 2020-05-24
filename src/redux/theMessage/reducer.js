import { createReducer } from "@reduxjs/toolkit"

import {
  reset,
  platitudeTop,
  platitudeMiddleA,
  platitudeMiddleB,
  platitudeBottom,
  threat,
  initted,
  error,
  publishing,
  isPristine,
} from "./actions"

export const theMessageSlice = {
  error: null,
  publishing: false,
  platitudeTop: `STAY ALERT`,
  platitudeMiddleA: `CONTROL`,
  platitudeMiddleB: `THE VIRUS`,
  platitudeBottom: `SAVE LIVES`,
  threat: `#01a43b`,
  initted: false,
  isPristine: true,
}

const theMessageReducer = createReducer(theMessageSlice, {

  [isPristine]: (state, action) => {
    state.isPristine = action.isPristine
    return state
  },
  
  [publishing]: (state, action) => {
    state.publishing = action.publishing
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

  [initted]: (state, action) => {
    state.initted = action.initted
    return state
  },

  [threat]: (state, action) => {
    state.threat = action.threat
    return state
  },

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
