import pJSON from '../../../package.json'
import { createReducer } from "@reduxjs/toolkit"

import {
  reset,
  connecting,
  isDark,
  logoFading,
  logoFaded,
  toggleMessages,
  loginContact,
  authing,
  authDone,
  authError,
  user,
  snackbar,
  settings,
  editorOpen,
  infoOpen,
} from "./actions"

export const appSlice = {
  pJSON,
  infoOpen: false,
  editorOpen: false,
  snackbar: null,
  user: false,
  isDark: true,
  connecting: false,
  loginContact: false,
  errors: null,
  feedbackSnackbar: false,
  authing: false,
  authDone: false,
  authError: false,
  logoFaded: false,
  logoFading: false,
}

const appReducer = createReducer(appSlice, {

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

  [settings]: (state, action) => {
    state.settings = action.settings
    return state
  },

  [snackbar]: (state, action) => {
    state.snackbar = action.snackbar
    return state
  },

  [user]: (state, action) => {
    state.user = action.user
    return state
  },

  [authError]: (state, action) => {
    state.authError = action.authError
    return state
  },

  [authDone]: (state, action) => {
    state.authDone = action.authDone
    return state
  },

  [authing]: (state, action) => {
    state.authing = action.authing
    return state
  },

  [loginContact]: (state, action) => {
    state.loginContact = action.loginContact
    return state
  },
  
  [toggleMessages]: (state, action) => {
    state.messagesOpen = action.messagesOpen
    return state
  },

  [isDark]: (state, action) => {
    state.isDark = action.isDark
    return state
  },

  [connecting]: (state, action) => {
    state.connecting = action.connecting
    return state
  },

  [reset]: () => {
    return appSlice
  }
})

export { appReducer }