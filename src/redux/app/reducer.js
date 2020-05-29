import pJSON from '../../../package.json'
import { createReducer } from "@reduxjs/toolkit"

import {
  reset,
  error,
  logoFading,
  logoFaded,
  snackbar,
  editorOpen,
  infoOpen,
} from "./actions"

export const appSlice = {
  pJSON,
  error: null,
  infoOpen: true,
  editorOpen: false,
  snackbar: null,
  logoFaded: false,
  logoFading: false,
}

const appReducer = createReducer(appSlice, {

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

  [infoOpen]: (state, action) => {
    state.infoOpen = action.infoOpen
    return state
  },

  [logoFading]: (state, action) => {
    state.logoFading = action.logoFading
    return state
  },

  [logoFaded]: (state, action) => {
    state.logoFaded = action.logoFaded
    return state
  },

  [editorOpen]: (state, action) => {
    state.editorOpen = action.editorOpen
    return state
  },

  [snackbar]: (state, action) => {
    state.snackbar = action.snackbar
    return state
  },

  [reset]: () => {
    return appSlice
  }
})

export { appReducer }