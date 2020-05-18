
import { createReducer } from "@reduxjs/toolkit"

import {
  reset,
  logoFaded,
  logoFading,
} from "./actions"

export const animationSlice = {
  logoFaded: false,
  logoFading: false,
}

const animationReducer = createReducer(animationSlice, {

  [logoFading]: (state, action) => {
    state.logoFading = action.logoFading
    return state
  },

  [logoFaded]: (state, action) => {
    state.logoFaded = action.logoFaded
    return state
  },

  [reset]: () => {
    return animationSlice
  }
})

export { animationReducer }