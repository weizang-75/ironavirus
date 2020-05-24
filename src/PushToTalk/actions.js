import { createAction } from '@reduxjs/toolkit'
import UAParser from 'ua-parser-js'
import { 
	getStore,
} from '../'
import Fingerprint2 from 'fingerprintjs2'
import axios from 'axios'

export const reset = createAction(`PUSHTOTALK/RESET`)
export const error = createAction(`PUSHTOTALK/ERROR`)
export const ticks = createAction(`PUSHTOTALK/TICK`)
export const fingerprint = createAction(`PUSHTOTALK/FINGERPRINT`)
export const fingerprintBits = createAction(`PUSHTOTALK/FINGERPRINTBITS`)
export const fingerprinting = createAction(`PUSHTOTALK/FINGERPRINTING`)
export const info = createAction(`PUSHTOTALK/INFO`)
export const firstTingResult = createAction(`PUSHTOTALK/TING/FIRST_RESULT`)
export const lastTingResult = createAction(`PUSHTOTALK/TING/LAST_RESULT`)
export const tinging = createAction(`PUSHTOTALK/TINGING`)
export const ua = createAction(`PUSHTOTALK/UA`)
export const fetchingIpgeo = createAction(`PUSHTOTALK/FETCHING`)
export const fetchedIpgeo = createAction(`PUSHTOTALK/FETCHED`)
export const ipgeo = createAction(`PUSHTOTALK/IPGEO`)

export const fetchIpgeo = () => {
	const store = getStore()
	store.dispatch({ type: `PUSHTOTALK/FETCHING`, fetchingIpgeo: true })
	const endPoint = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
	axios
		.get(endPoint)
		.then(function(response) {
			// console.log (response.data)
			store.dispatch({ type: `PUSHTOTALK/IPGEO`, ipgeo: response.data })
		})
		.catch(function(error) {
		  store.dispatch({ type: `PUSHTOTALK/ERROR`, error: error.toString() })
		})
		.finally(function() {
			store.dispatch({ type: `PUSHTOTALK/FETCHING`, fetchingIpgeo: false })
			store.dispatch({ type: `PUSHTOTALK/FETCHED`, fetchedIpgeo: true })
		})
}

export const initFingerprint = () => {
	const store = getStore()
	const parser = new UAParser()
	const ua = parser.getResult()
	store.dispatch({ type: `PUSHTOTALK/FINGERPRINTING`, fingerprinting: true })
	store.dispatch({ type: `PUSHTOTALK/UA`, ua })
	Fingerprint2.getPromise().then(function(components) {
		let bits = []
	    const values = components.map(function(component) {
	      bits.push(component)
	      return component.value
	    })
	    const fingerprint = Fingerprint2.x64hash128(values.join(""), 31)
	    store.dispatch({ type: `PUSHTOTALK/FINGERPRINTBITS`, fingerprintBits: bits })
	    store.dispatch({ type: `PUSHTOTALK/FINGERPRINT`, fingerprint })
	    store.dispatch({ type: `PUSHTOTALK/FINGERPRINTING`, fingerprinting: false })
	 })
}

export const ting = () => {
	const store = getStore()
	store.dispatch({ type: `PUSHTOTALK/TINGING`, tinging: true })
	const { 
		entity,
		fingerprint,
		fingerprintBits,
		ua,
	} = store.getState().pushToTalk
	let ting = {
		action: `ting`,
		entity,
		fingerprint,
	}
	if (ua){
		ting.osName = ua.os.name
		ting.osVersion = ua.os.version
		ting.browserName = ua.browser.name
		ting.browserMajor = ua.browser.major
		ting.browserVersion = ua.browser.version
	}
	if (fingerprintBits){
		// ting.userAgent = fingerprintBits[0].value
		//ting.screenResolution = fingerprintBits[6].value
		//ting.availableScreenResolution = fingerprintBits[7].value
		ting.timezone = fingerprintBits[9].value
		ting.platform = fingerprintBits[16].value
		ting.audio = fingerprintBits[28].value
	}
	console.log (ting)
	axios.post(process.env.REACT_APP_PUSH_TO_TALK, ting)
		.then(function(response) {
			// console.log (response.data)
			store.dispatch({ type: `PUSHTOTALK/TING/LAST_RESULT`, lastTingResult: response.data })
			store.dispatch({ type: `PUSHTOTALK/TINGING`, tinging: false })
		})
		.catch(function(error) {
			store.dispatch({ type: `PUSHTOTALK/ERROR`, error: error.toString() })
			store.dispatch({ type: `PUSHTOTALK/TINGING`, tinging: false })
		})
}

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
			store.dispatch({ type: `PUSHTOTALK/TING/FIRST_RESULT`, firstTingResult: response.data })
			store.dispatch({ type: `PUSHTOTALK/TINGING`, tinging: false })
		})
		.catch(function(error) {
			store.dispatch({ type: `PUSHTOTALK/ERROR`, error: error.toString() })
			store.dispatch({ type: `PUSHTOTALK/TINGING`, tinging: false })
		})
}

