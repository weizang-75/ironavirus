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
  virus,
  virusLoading,
  virusLoaded,
} from "./actions"

export const theMessageSlice = {
  error: null,
  publishing: false,
  platitudeTop: `STAY ALERT`,
  platitudeMiddleA: `CONTROL`,
  platitudeMiddleB: `THE VIRUS`,
  platitudeBottom: `SAVE LIVES`,
  threatLevel: `warning`,
  initted: false,
  isPristine: true,
  virus: null,
  virusLoading: false,
  virusLoaded: false,
}

const theMessageReducer = createReducer(theMessageSlice, {

  [virusLoaded]: (state, action) => {
    state.virusLoaded = action.virusLoaded
    return state
  },
  
  [virus]: (state, action) => {
    state.virus = action.virus
    return state
  },
  
  [virusLoading]: (state, action) => {
    state.virusLoading = action.virusLoading
    return state
  },

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
