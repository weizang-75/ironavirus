import { createReducer } from "@reduxjs/toolkit"

import {
  reset,
  sending,
  message,
} from "./actions"

export const pushToTalkSlice = {
  sending: false,
  message: ``,
}

const pushToTalkReducer = createReducer(pushToTalkSlice, {

  [message]: (state, action) => {
    state.message = action.message
    return state
  },

  [sending]: (state, action) => {
    state.sending = action.sending
    return state
  },

  [reset]: () => {
    return pushToTalkSlice
  }
})

export { pushToTalkReducer }