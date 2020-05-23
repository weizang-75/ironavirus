import { createReducer } from '@reduxjs/toolkit'

import {
 	reset,
  ticks,
  fingerprint,
  fingerprintBits,
  fingerprinting,
  info,
  firstTingResult,
  lastTingResult,
  tinging,
  error,
  ua,
  fetchingIpgeo,
  fetchedIpgeo,
  ipgeo,
} from "./actions"

export const pushToTalkSlice = {
  entity: `ironavirus`,
  error: null,
	tickInterval: 1, // seconds
	ticks: 0,
  fingerprint: null,
  fingerprintBits: null,
  fingerprinting: false,
  info: false,
  firstTingResult: null,
  lastTingResult: null,
  tinging: null,
  ua: null,
  fetchingIpgeo: false,
  fetchedIpgeo: false,
  ipgeo: null,
}

const pushToTalkReducer = createReducer(pushToTalkSlice, {

  [ipgeo]: (state, action) => {
    state.ipgeo = action.ipgeo
    return state
  },
  
  [fetchingIpgeo]: (state, action) => {
    state.fetchingIpgeo = action.fetchingIpgeo
    return state
  },

  [fetchedIpgeo]: (state, action) => {
    state.fetchedIpgeo = action.fetchedIpgeo
    return state
  },

  [ua]: (state, action) => {
    state.ua = action.ua
    return state
  },
  
  [fingerprintBits]: (state, action) => {
    state.fingerprintBits = action.fingerprintBits
    return state
  },
  
  [error]: (state, action) => {
    state.error = action.error
    return state
  },
  
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