import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'
import { slugify } from '../../utils/slugify'
import { onPublish } from '../app/actions'

export const reset = createAction(`THEMESSAGE/RESET`)
export const error = createAction(`THEMESSAGE/ERROR`)
export const platitudeTop = createAction(`THEMESSAGE/PLAT-TOP`)
export const platitudeMiddleA = createAction(`THEMESSAGE/PLAT-MID-A`)
export const platitudeMiddleB = createAction(`THEMESSAGE/PLAT-MID-B`)
export const platitudeBottom = createAction(`THEMESSAGE/PLAT-BOTTOM`)
export const sending = createAction(`THEMESSAGE/SENDING`)
export const sent = createAction(`THEMESSAGE/SENT`)
export const threat = createAction(`THEMESSAGE/THREAT`)
export const initted = createAction(`THEMESSAGE/INITTED`)
export const publishing = createAction(`THEMESSAGE/PUBLISHING`)
export const isPristine = createAction(`THEMESSAGE/PRISTINE`)

export const publish = () => {
	const store = getStore()
	const theMessageSlice = store.getState().theMessage
	let p1 = theMessageSlice.platitudeTop
	let p2 = theMessageSlice.platitudeMiddleA
	let p3 = theMessageSlice.platitudeMiddleB
	let p4 = theMessageSlice.platitudeBottom
	let l = theMessageSlice.threat
	let alertLevel = `alert-`
	if (l === `#01a43b`) alertLevel = `warning-`
	let slug = slugify(`${alertLevel} ${p1} ${p2} ${p3} ${p4}`)
	const pushToTalkSlice = store.getState().pushToTalk
	const {
		fingerprint,
		ipgeo,
	} = pushToTalkSlice
	let ironavirus = {
		action: `publish`,
		slug,
		platitudeTop: p1,
		platitudeMiddleA: p2,
		platitudeMiddleB: p3,
		platitudeBottom: p4,
		threat: l,
		fingerprint,
	}
	if (ipgeo){
		ironavirus.ip = ipgeo.ip
		ironavirus.city = ipgeo.city
		ironavirus.countryName = ipgeo.country_name
		ironavirus.countryCode = ipgeo.country_code2
		ironavirus.lat = ipgeo.latitude
		ironavirus.lon = ipgeo.longitude		
	}
	console.log ('ironavirus', ironavirus)
}

export const publish_ = () => {
	const store = getStore()
	const theMessageSlice = store.getState().theMessage
	let p1 = theMessageSlice.platitudeTop
	let p2 = theMessageSlice.platitudeMiddleA
	let p3 = theMessageSlice.platitudeMiddleB
	let p4 = theMessageSlice.platitudeBottom
	let l = theMessageSlice.threat
	let alertLevel = `alert-`
	if (l === `#01a43b`) alertLevel = `warning-`
	let slug = slugify(`${alertLevel} ${p1} ${p2} ${p3} ${p4}`)
	const pushToTalkSlice = store.getState().pushToTalk
	const {
		fingerprint,
	} = pushToTalkSlice

	let ironavirus = {
		action: `publish`,
		slug,
		platitudeTop: p1,
		platitudeMiddleA: p2,
		platitudeMiddleB: p3,
		platitudeBottom: p4,
		threat: l,
		fingerprint,
		country: `Global`,
	}
	store.dispatch({ type: `THEMESSAGE/PUBLISHING`, publishing: true })
	axios.post(process.env.REACT_APP_IRONAVIRUS, ironavirus)
		.then (function(res) {
			store.dispatch({ type: `THEMESSAGE/PUBLISHING`, publishing: false })
			onPublish(res.data)
		})
		.catch (function(error) {
			// console.log (error.toString())
			store.dispatch({ type: `THEMESSAGE/ERROR`, error: error.toString() })
			store.dispatch({ type: `THEMESSAGE/PUBLISHING`, publishing: false })
		})
}

export const init = () => {
	const store = getStore()
	store.dispatch({ type: `THEMESSAGE/PLAT-TOP`, platitudeTop: `` })
	store.dispatch({ type: `THEMESSAGE/PLAT-MID-A`, platitudeMiddleA: `` })
	store.dispatch({ type: `THEMESSAGE/PLAT-MID-B`, platitudeMiddleB: `` })
	store.dispatch({ type: `THEMESSAGE/PLAT-BOTTOM`, platitudeBottom: `` })	
	store.dispatch({ type: `THEMESSAGE/INITTED`, initted: true })
}

export const defaultMessage = () => {
	const store = getStore()
	store.dispatch({ type: `THEMESSAGE/PLAT-TOP`, platitudeTop: `STAY ALERT` })
	store.dispatch({ type: `THEMESSAGE/PLAT-MID-A`, platitudeMiddleA: `CONTROL` })
	store.dispatch({ type: `THEMESSAGE/PLAT-MID-B`, platitudeMiddleB: `THE VIRUS` })
	store.dispatch({ type: `THEMESSAGE/PLAT-BOTTOM`, platitudeBottom: `SAVE LIVES` })
}




export const saveMessage_ = (theMessage) => {
	let endPoint = `${process.env.REACT_APP_CLOUD_FUNCTIONS}/ironavirus`
	const store = getStore()
	store.dispatch({ type: `THEMESSAGE/SENDING`, sending: true })
	
	let postObj = {
		theMessage: {
			platitudeTop: `FIRST PLATITUDE`,
			platitudeMiddleA: `SECOND`,
			platitudeMiddleB: `PLATITUDE`,
			platitudeBottom: `THIRD PLATITUDE`,
		}
	}
    axios.post(endPoint, postObj)
    	.then (function(res) {
    		console.log (res.data)
	    	store.dispatch({type: `THEMESSAGE/SENT`, sent: true })
	    	store.dispatch({ 
				type: `APP/SNACKBAR`, 
				snackbar: {
					severity: `info`,
					message: res.data.message
				}})
	    })
	    .catch (function(error) {
	    	store.dispatch({type: `THEMESSAGE/SENT`, sent: true })
    		store.dispatch({ 
			type: `APP/SNACKBAR`, 
			snackbar: {
				severity: `error`,
				message: error.string(),
			}})
	    })
	    .finally (function() {
	    	store.dispatch({type: `THEMESSAGE/SENDING`, sending: false })
	    })
}