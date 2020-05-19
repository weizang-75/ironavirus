import pJSON from '../../../package.json'
import { createReducer } from "@reduxjs/toolkit"

import {
  reset,
  connecting,
  isDark,
  identPlayed,
  identPlaying,
  toggleMessages,
  loginContact,
  authing,
  authDone,
  authError,
  user,
  menuOpen,
  snackbar,
  settings,
  uiOpen,
} from "./actions"

export const appSlice = {
  pJSON,
  theMenu: {
    entity: `ironavirus`,
    author: `weizang`,
    etc: 123,
  },
  uiOpen: true,
  snackbar: null,
  user: false,
  isDark: true,
  connecting: false,
  loginContact: false,
  errors: null,
  feedbackSnackbar: false,
  identPlayed: false,
  identPlaying: false,
  authing: false,
  authDone: false,
  authError: false,
  menuOpen: false,
  messagesOpen: false,
  messages: [
    {
      id: `firebaseId_lidubfweuifl`,
      seen: false,
      primary: `Hello!`,
      secondary: `Start a conversation by sending us a message`,
      avatar: `/logo192.png`,
    },
  ],
}

const appReducer = createReducer(appSlice, {

  [uiOpen]: (state, action) => {
    state.uiOpen = action.uiOpen
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

  [menuOpen]: (state, action) => {
    state.menuOpen = action.menuOpen
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

  [identPlayed]: (state, action) => {
    state.identPlayed = action.identPlayed
    return state
  },

  [identPlaying]: (state, action) => {
    state.identPlaying = action.identPlaying
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