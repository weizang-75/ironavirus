import { createReducer } from '@reduxjs/toolkit'

import {
 	reset,
  ticks,
  fingerprint,
  fingerprinting,
  info,
  firstTingResult,
  lastTingResult,
  tinging,
} from "./actions"

export const pushToTalkSlice = {
  entity: `ironavirus`,
	tickInterval: 1, // seconds
	ticks: 0,
  fingerprint: null,
  fingerprinting: false,
  info: false,
  firstTingResult: null,
  lastTingResult: null,
  tinging: null,
}

const pushToTalkReducer = createReducer(pushToTalkSlice, {

  [tinging]: (state, action) => {
    state.tinging = action.tinging
    return state
  },

  [lastTingResult]: (state, action) => {
    state.lastTingResult = action.lastTingResult
    return state
  },

  [firstTingResult]: (state, action) => {
    state.firstTingResult = action.firstTingResult
    return state
  },

  [info]: (state, action) => {
    state.info = action.info
    return state
  },

  [fingerprinting]: (state, action) => {
    state.fingerprinting = action.fingerprinting
    return state
  },

  [fingerprint]: (state, action) => {
    state.fingerprint = action.fingerprint
    return state
  },

  [ticks]: (state, action) => {
    state.ticks = parseFloat(state.ticks) + 1
    return state
  },

  [reset]: () => {
    return pushToTalkSlice
  }
  
})

export { pushToTalkReducer }