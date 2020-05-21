import { createAction } from '@reduxjs/toolkit'
// import UAParser from 'ua-parser-js'
import { 
	getStore,
} from '../'
import Fingerprint2 from 'fingerprintjs2'
import axios from 'axios'

export const reset = createAction(`PUSHTOTALK/RESET`)
export const ticks = createAction(`PUSHTOTALK/TICK`)
export const fingerprint = createAction(`PUSHTOTALK/FINGERPRINT`)
export const fingerprinting = createAction(`PUSHTOTALK/FINGERPRINTING`)
export const info = createAction(`PUSHTOTALK/INFO`)
export const firstTingResult = createAction(`PUSHTOTALK/TING/FIRST_RESULT`)
export const lastTingResult = createAction(`PUSHTOTALK/TING/LAST_RESULT`)
export const tinging = createAction(`PUSHTOTALK/TINGING`)

export const firstTing = () => {
	const store = getStore()
	store.dispatch({ type: `PUSHTOTALK/TINGING`, tinging: true })
	const { 
		entity,
		fingerprint
	} = store.getState().pushToTalk
	let ting = {
		action: `firstTing`,
		entity,
		fingerprint,
	}
	axios.post(process.env.REACT_APP_PUSH_TO_TALK, ting)
		.then(function(response) {
			console.log (response.data.ting)
		})
}

























export const initFingerprint = () => {
	// console.log ('initFingerprint')
	const store = getStore()
	store.dispatch({ type: `PUSHTOTALK/FINGERPRINTING`, fingerprinting: true })
	Fingerprint2.getPromise().then(function(components) {
	    const values = components.map(function(component) {
	      return component.value
	    })
	    const fingerprint = Fingerprint2.x64hash128(values.join(""), 31)
	    store.dispatch({ type: `PUSHTOTALK/FINGERPRINT`, fingerprint })
	    store.dispatch({ type: `PUSHTOTALK/FINGERPRINTING`, fingerprinting: false })
	 })
}






















export const ipGeo = () => {
	console.log ('ipGeo')
}



export const ting = () => {
	console.log ('ting')
}
