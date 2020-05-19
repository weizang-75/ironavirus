import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'
import firebase from '@firebase/app'
import '@firebase/auth'
import { getStore, getHistory } from '../../'

export const reset = createAction(`APP/RESET`)
export const connecting = createAction(`APP/CONNECTING`)
export const isDark = createAction(`APP/IS_DARK`)
export const identPlaying = createAction(`APP/IDENT_PLAYING`)
export const identPlayed = createAction(`APP/IDENT_PLAYED`)
export const authing = createAction(`APP/AUTHING`)
export const authDone = createAction(`APP/AUTH_DONE`)
export const authError = createAction(`APP/AUTH_ERROR`)
export const toggleMessages = createAction(`APP/MESSAGES/TOGGLE`)
export const loginContact = createAction(`APP/LOGIN_CONTACT`)
export const user = createAction(`APP/USER`)
export const menuOpen = createAction(`APP/MENU_OPEN`)
export const snackbar = createAction(`APP/SNACKBAR`)
export const settings = createAction(`APP/SETTINGS`)
export const uiOpen = createAction(`APP/UI_OPEN`)

export const sendEmail = (to, message) => {
	const store = getStore()
	store.dispatch({ type: `APP/SENDING`, sending: true })
	let mailObj = {
		subject: `${message.substring(0,50)}...`,
		message,
	}
	let endPoint = `${process.env.REACT_APP_CLOUD_FUNCTIONS}/`
	switch (to) {   
        case `chris`:
        	endPoint += `emailChris`
        	break
        default: {
            return false
        }
    }   
    axios.post(endPoint, mailObj)
    	.then (function(res) {
	    	store.dispatch({type: `APP/SENT`, sent: true })
	    	console.log (res.data.message)
	    	store.dispatch({ 
				type: `APP/SNACKBAR`, 
				snackbar: {
					severity: `info`,
					message: `res.data.message`
				}})


	    })
	    .catch (function(error) {
	    	store.dispatch({type: `APP/SENT`, sent: true })
	    })
	    .finally (function() {
	    	// console.log ('message sent')
	    	store.dispatch({type: `APP/SENDING`, sending: false })

	    })
}

export const signin = creds => {
	const store = getStore()
	store.dispatch({type: `APP/AUTH_DONE`, authDone: false })
	store.dispatch({type: `APP/AUTHING`, authing: true })
	const {email,password} = creds
	firebase.auth()
		.signInWithEmailAndPassword(email, password)
		.then(function(result) {
			store.dispatch({type: `APP/USER`, user: true })
			store.dispatch({type: `APP/AUTHING`, authing: false })
			store.dispatch({type: `APP/AUTH_DONE`, authDone: true })
			store.dispatch({type: `APP/AUTH_ERROR`, authError: false })
		})
		.catch(function(error) {
			store.dispatch({ type: `APP/USER`, user: null})
		  store.dispatch({type: `APP/AUTHING`, authing: false })
		  store.dispatch({type: `APP/AUTH_DONE`, authDone: true })
		  store.dispatch({type: `APP/AUTH_ERROR`, authError: `${error.message}` })
		})
}

export const signout = () => {
	const store = getStore()
	const history = getHistory()
	firebase.auth().signOut()
	store.dispatch({ type: `APP/USER`, user: false})
	history.push(`/`)
}
