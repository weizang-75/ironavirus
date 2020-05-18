import { createReducer } from "@reduxjs/toolkit"
import {
 	reset,
  error,
  loading,
  loaded,
  updateList,
  attempts,
  creating,
  deleting,
  updating,
} from "./actions"

export const sitesSlice = {
  loading: false,
  loaded: false,
  attempts: 0,
  creating: false,
  deleting: false,
  updating: false,
  reset: false,
  errors: [],
  list: [],
}

const sitesReducer = createReducer(sitesSlice, {

  [updateList]: (state, action) => {
    state.list = action.list
    return state
  },

  [updating]: (state, action) => {
    state.updating = action.updating
    return state
  },

  [deleting]: (state, action) => {
    state.deleting = action.deleting
    return state
  },

  [creating]: (state, action) => {
    state.creating = action.creating
    return state
  },

  [attempts]: (state, action) => {
    state.attempts = state.attempts + 1
    return state
  },

  [loaded]: (state, action) => {
    state.loaded = action.loaded
    return state
  },

  [loading]: (state, action) => {
    state.loading = action.loading
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

  [reset]: (state, action) => {
    state.reset = action.reset
    return state
  }

})

export { sitesReducer }

/*
  scrap

*/