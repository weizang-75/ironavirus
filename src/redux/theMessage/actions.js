import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'
// import { slugify } from '../../utils/slugify'
import { onPublish } from '../app/actions'

export const reset = createAction(`THEMESSAGE/RESET`)
export const error = createAction(`THEMESSAGE/ERROR`)
export const platitudeTop = createAction(`THEMESSAGE/PLAT-TOP`)
export const platitudeMiddleA = createAction(`THEMESSAGE/PLAT-MID-A`)
export const platitudeMiddleB = createAction(`THEMESSAGE/PLAT-MID-B`)
export const platitudeBottom = createAction(`THEMESSAGE/PLAT-BOTTOM`)
export const sending = createAction(`THEMESSAGE/SENDING`)
export const sent = createAction(`THEMESSAGE/SENT`)
export const threatLevel = createAction(`THEMESSAGE/THREATLEVEL`)
export const initted = createAction(`THEMESSAGE/INITTED`)
export const publishing = createAction(`THEMESSAGE/PUBLISHING`)
export const isPristine = createAction(`THEMESSAGE/PRISTINE`)
export const virus = createAction(`THEMESSAGE/VIRUS`)
export const virusLoading = createAction(`THEMESSAGE/VIRUS_LOADING`)
export const virusLoaded = createAction(`THEMESSAGE/VIRUS_LOADED`)

export const publish = () => {
	const store = getStore()
	const theMessageSlice = store.getState().theMessage
	let p1 = theMessageSlice.platitudeTop
	let p2 = theMessageSlice.platitudeMiddleA
	let p3 = theMessageSlice.platitudeMiddleB
	let p4 = theMessageSlice.platitudeBottom
	let threatLevel = `alert`
	if (theMessageSlice.threatLevel === `warning`){
		threatLevel = `warning`
	}
	let virus = {
		platitudeTop: p1,
		platitudeMiddleA: p2,
		platitudeMiddleB: p3,
		platitudeBottom: p4,
		threatLevel,
	}
	store.dispatch({ type: `THEMESSAGE/PUBLISHING`, publishing: true })
	axios.post(process.env.REACT_APP_IRONAVIRUS, {
		action: `publish`,
		virus
	})
		.then (function(res) {
			store.dispatch({ type: `THEMESSAGE/PUBLISHING`, publishing: false })
			onPublish(res.data)
		})
		.catch (function(error) {
			store.dispatch({ type: `THEMESSAGE/ERROR`, error: error.toString() })
			store.dispatch({ type: `THEMESSAGE/PUBLISHING`, publishing: false })
		})
}

export const loadVirus = id => {
	const store = getStore()
	store.dispatch({ type: `THEMESSAGE/VIRUS_LOADING`, virusLoading: true })
	axios.post(process.env.REACT_APP_IRONAVIRUS, {
		action: `load`,
		id
	})
		.then (function(res) {
			if (res.data.success){
				store.dispatch({ type: `THEMESSAGE/VIRUS`, virus: res.data.virus })
			} else {
				store.dispatch({ type: `THEMESSAGE/ERROR`, error: res.data.message })
			}
			store.dispatch({ type: `THEMESSAGE/VIRUS_LOADING`, virusLoading: false })
		})
		.catch (function(error) {
			store.dispatch({ type: `THEMESSAGE/ERROR`, error: error.toString() })
			store.dispatch({ type: `THEMESSAGE/VIRUS_LOADING`, virusLoading: false })
		})
		.finally (function () {
			store.dispatch({ type: `THEMESSAGE/VIRUS_LOADED`, virusLoaded: true })
		})
}

export const defaultMessage = () => {
	const store = getStore()
	store.dispatch({ type: `THEMESSAGE/ERROR`, error: false })
	store.dispatch({ type: `THEMESSAGE/PLAT-TOP`, platitudeTop: `STAY ALERT` })
	store.dispatch({ type: `THEMESSAGE/PLAT-MID-A`, platitudeMiddleA: `CONTROL` })
	store.dispatch({ type: `THEMESSAGE/PLAT-MID-B`, platitudeMiddleB: `THE VIRUS` })
	store.dispatch({ type: `THEMESSAGE/PLAT-BOTTOM`, platitudeBottom: `SAVE LIVES` })
}

export const newVirus = () => {
	const store = getStore()
	store.dispatch({ type: `THEMESSAGE/ERROR`, error: false })
	store.dispatch({ type: `THEMESSAGE/PLAT-TOP`, platitudeTop: `` })
	store.dispatch({ type: `THEMESSAGE/PLAT-MID-A`, platitudeMiddleA: `` })
	store.dispatch({ type: `THEMESSAGE/PLAT-MID-B`, platitudeMiddleB: `` })
	store.dispatch({ type: `THEMESSAGE/PLAT-BOTTOM`, platitudeBottom: `` })	
	store.dispatch({ type: `THEMESSAGE/INITTED`, initted: true })
}