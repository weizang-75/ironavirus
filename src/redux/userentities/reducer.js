import { createReducer } from "@reduxjs/toolkit"
import {
  userentity,
 	reset,
  error,
  creating,
  deleting,
  updating,
  savedUserentity,
  savingUserentity,
  ipgeoFetching,
  ipgeoFetched,
  updateYou,
  snapshotUpdate,
  readyToPing,
  doneFirstPing,
  fingerprint,
  fingerprinted,
  fingerprinting,
  subscribed,
  subscribing,
  subscription,
  selectedEntity,
} from "./actions"

export const userentitiesSlice = {
  subscribed: false,
  subscribing: false,
  subscription: [],
  selectedEntity: null,
  fingerprint: null,
  fingerprinting: false,
  fingerprinted: false,
  readyToPing: false,
  doneFirstPing: false,
  ipgeoFetching: false,
  ipgeoFetched: false,
  creating: false,
  deleting: false,
  updating: false,
  reset: false,
  errors: [],
  saving: false,
  saved: false,
  snapshot: [],
  you: {
    ip: null,
  },
  userentity: null,
}

const userentitiesReducer = createReducer(userentitiesSlice, {

  [selectedEntity]: (state, action) => {
    state.selectedEntity = action.selectedEntity
    return state
  },

  [subscribed]: (state, action) => {
    state.subscribed = action.subscribed
    return state
  },

  [subscribing]: (state, action) => {
    state.subscribing = action.subscribing
    return state
  },

  [subscription]: (state, action) => {
    state.subscription = action.subscription
    return state
  },

  [fingerprinting]: (state, action) => {
    state.fingerprinting = action.fingerprinting
    return state
  },

  [fingerprinted]: (state, action) => {
    state.fingerprinted = action.fingerprinted
    return state
  },

  [fingerprint]: (state, action) => {
    state.fingerprint = action.fingerprint
    return state
  },
  
  [doneFirstPing]: (state, action) => {
    state.doneFirstPing = action.doneFirstPing
    return state
  },


  [readyToPing]: (state, action) => {
    state.readyToPing = action.readyToPing
    return state
  },

  [userentity]: (state, action) => {
    state.userentity = action.userentity
    return state
  },

  [snapshotUpdate]: (state, action) => {
    state.snapshot = action.userentities
    return state
  },

  [updateYou]: (state, action) => {
    state.you = {
      updated: Date.now(),
      ...state.you, 
      ...action.data
    }
    delete state.you.fonts
    delete state.you.plugins
    return state
  },

  [ipgeoFetched]: (state, action) => {
    state.ipgeoFetched = action.fetched
    return state
  },

  [ipgeoFetching]: (state, action) => {
    state.ipgeoFetching = action.fetching
    return state
  },

  [savingUserentity]: (state, action) => {
    state.saving = action.saving
    return state
  },

  [savedUserentity]: (state, action) => {
    state.saved = action.saved
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

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

  [reset]: (state, action) => {
    state.reset = action.reset
    return state
  }

})

export { userentitiesReducer }
