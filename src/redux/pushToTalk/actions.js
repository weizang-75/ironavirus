import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'
// import firebase from '@firebase/app'
// import '@firebase/auth'
import { 
	getStore, 
	// getHistory 
} from '../../'

export const reset = createAction(`PUSH-TO-TALK/RESET`)
export const sending = createAction(`PUSH-TO-TALK/SENDING`)
export const message = createAction(`PUSH-TO-TALK/MESSAGE`)

export const clientSend = (message, fingerprint) => {
	const store = getStore()
	store.dispatch({ type: `PUSH-TO-TALK/SENDING`, sending: true })
	let endPoint = `${process.env.REACT_APP_CLOUD_FUNCTIONS}/pushToTalkClientSend`
	axios.post(endPoint, {message, fingerprint})
    	.then (function(res) {
	    	// console.log (res.data)
	    	if (!res.data.success){
	    		return store.dispatch({ 
					type: `APP/SNACKBAR`, 
					snackbar: {
						severity: `warning`,
						message: res.data.message
					}})
	    	}
	    	return store.dispatch({ 
				type: `APP/SNACKBAR`, 
				snackbar: {
					severity: `success`,
					message: res.data.message
				}})
	    })
	   	.catch (function(error) {
	    	console.log (error)
	    })
	    .finally (function() {
	    	store.dispatch({type: `PUSH-TO-TALK/SENDING`, sending: false })
	    	store.dispatch({type: `PUSH-TO-TALK/RESET` })
	    })
}
