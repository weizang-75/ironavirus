import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'


export const reset = createAction(`THEMESSAGE/RESET`)
export const platitudeTop = createAction(`THEMESSAGE/PLAT-TOP`)
export const platitudeMiddleA = createAction(`THEMESSAGE/PLAT-MID-A`)
export const platitudeMiddleB = createAction(`THEMESSAGE/PLAT-MID-B`)
export const platitudeBottom = createAction(`THEMESSAGE/PLAT-BOTTOM`)

export const sending = createAction(`THEMESSAGE/SENDING`)
export const sent = createAction(`THEMESSAGE/SENT`)

export const saveMessage = (theMessage) => {
	console.log ('saveMessage', theMessage)
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