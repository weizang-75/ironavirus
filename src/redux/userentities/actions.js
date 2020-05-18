import { createAction } from '@reduxjs/toolkit'
import UAParser from 'ua-parser-js'
import { 
	getStore,
} from '../../'
import Fingerprint2 from 'fingerprintjs2'
import axios from 'axios'

export const userentity = createAction(`USERENTITY`)
export const reset = createAction(`USERENTITIES/RESET`)
export const error = createAction(`USERENTITIES/ERROR`)
export const updateList = createAction(`USERENTITIES/UPDATELIST`)
export const creating = createAction(`USERENTITIES/CREATING`)
export const deleting = createAction(`USERENTITIES/DELETING`)
export const updating = createAction(`USERENTITIES/UPDATING`)
export const saveUserentity = createAction(`USERENTITY/SAVE`)
export const savingUserentity = createAction(`USERENTITY/SAVING`)
export const savedUserentity = createAction(`USERENTITY/SAVED`)
export const updateYou = createAction(`USERENTITY/YOU/UPDATE`)
export const ipgeoFetching = createAction(`USERENTITY/IPGEO/FETCHING`)
export const ipgeoFetched = createAction(`USERENTITY/IPGEO/FETCHED`)
export const snapshotUpdate = createAction(`USERENTITY/SNAPSHOT/UPDATE`)
export const readyToPing = createAction(`USERENTITY/READY_TO_PING`)
export const doneFirstPing = createAction(`USERENTITY/DONE_FIRST_PING`)
export const fingerprint = createAction(`USERENTITY/FINGERPRINT`)
export const fingerprinted = createAction(`USERENTITY/FINGERPRINTED`)
export const fingerprinting = createAction(`USERENTITY/FINGERPRINTING`)
export const pinging = createAction(`USERENTITY/PINGING`)
export const subscribed = createAction(`USERENTITY/SUBSCRIBED`)
export const subscribing = createAction(`USERENTITY/SUBSCRIBING`)
export const subscription = createAction(`USERENTITY/SUBSCRIPTION`)
export const selectedEntity = createAction(`USERENTITY/SELECT`)

export const userentityPing = () => {
	const parser = new UAParser()
	const ua = parser.getResult()
	const store = getStore()
	const state = store.getState()
	const appSlice = state.app
	const {
        user,
        messages,
    } = appSlice
    const clockworkSlice = state.clockwork
    const {
        ticks,
    } = clockworkSlice
	const userentitiesSlice = state.userentities
    const {
        you,
    } = userentitiesSlice
	store.dispatch({ type: `USERENTITY/PINGING`, pinging: true })
	let userentity = {
		appName: `ironavirus`,
		fingerprint: store.getState().userentities.fingerprint,
		visitDuration: ticks,
		messages,
		signedIn: user,
		...you,
		...ua,
	}
	const endPoint = `${process.env.REACT_APP_CLOUD_FUNCTIONS}/userentityPing`
	axios.post(endPoint, userentity)
		.then(function(response) {
			// console.log (response)
		})
		.catch(function(error) {
			// console.log ('error', error)
			store.dispatch({ 
				type: `APP/SNACKBAR`, 
				snackbar: {
					severity: `error`,
					message: error.toString()
				}})
		})
		.finally(function() {
			store.dispatch({ type: `USERENTITY/PINGING`, pinging: false })
			// console.log ('finally')
		})
}

export const userentityInitialPing = () => {
	const store = getStore()
	store.dispatch({ type: `USERENTITY/PINGING`, pinging: true })
	const endPoint = `${process.env.REACT_APP_CLOUD_FUNCTIONS}/userentityInitialPing`
	let postObj = {
		fingerprint: store.getState().userentities.fingerprint,
	}
	axios.post(endPoint, postObj)
		.then(function(response) {
			// let severity = `success`
			// let message = response.data.message
			// if (!response.data.success){
			// 	severity = `warning`
			// 	message = response.data.message
			// }
			// store.dispatch({ type: `APP/SNACKBAR`, snackbar: {
			// 	severity,
			// 	message,
			// }})
		})
		.catch(function(error) {
			store.dispatch({ 
				type: `APP/SNACKBAR`, 
				snackbar: {
					severity: `error`,
					message: error.toString()
				}})
		})
		.finally(function() {
			store.dispatch({ type: `USERENTITY/PINGING`, pinging: false })
		})
}


export const makeFingerprint = () => {
	const showFP = false
	const store = getStore()
	store.dispatch({ type: `USERENTITY/FINGERPRINTED`, fingerprinted: false })
	store.dispatch({ type: `USERENTITY/FINGERPRINTING`, fingerprinting: true })
  	Fingerprint2.getPromise().then(function(components) {
	    const values = components.map(function(component) {
	      return component.value
	    })
	    const fingerprint = Fingerprint2.x64hash128(values.join(""), 31)
	    if (showFP) console.log ('fingerprint', fingerprint)
	    store.dispatch({ type: `USERENTITY/FINGERPRINT`, fingerprint })
	    store.dispatch({ type: `USERENTITY/FINGERPRINTED`, fingerprinted: true })
	    store.dispatch({ type: `USERENTITY/FINGERPRINTING`, fingerprinting: false })
	 })
}

export const fetchIpgeo = () => {
	const endPoint = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
	const store = getStore()
	store.dispatch({ type: `USERENTITY/IPGEO/FETCHING`, fetching: true })
	axios
	.get(endPoint)
	.then(function(response) {
		// console.log (response.data)
		store.dispatch({ type: `USERENTITY/YOU/UPDATE`, data: response.data })
	})
	.catch(function(error) {
	  store.dispatch({ type: `USERENTITIES/ERROR`, error: error.toString() })
	})
	.finally(function() {
		store.dispatch({ type: `USERENTITY/IPGEO/FETCHING`, fetching: false })
		store.dispatch({ type: `USERENTITY/IPGEO/FETCHED`, fetched: true })
		store.dispatch({ type: `USERENTITY/READY_TO_PING`, readyToPing: true })
	})
}
