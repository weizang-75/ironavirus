
import { createReducer } from "@reduxjs/toolkit"

import {
  reset,
  tick,
} from "./actions"

export const clockworkSlice = {
  ticks: 0,
}

const clockworkReducer = createReducer(clockworkSlice, {

  [tick]: (state, action) => {
    // console.log ('tick', action)
    state.ticks = parseFloat(state.ticks) + 1
    return state
  },

  [reset]: () => {
    return clockworkSlice
  }
})

export { clockworkReducer }