import { createAction } from '@reduxjs/toolkit'
import { getStore, getHistory } from '../../'
import firebase from '@firebase/app'
import '@firebase/auth'

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
export const editorOpen = createAction(`APP/EDITOR_OPEN`)
export const logoFaded = createAction(`APP/LOGOFADED`)
export const logoFading = createAction(`APP/LOGOFADING`)
export const infoOpen = createAction(`APP/INFO_OPEN`)


export const onPublish = (response) => {
	const store = getStore()
	if (response.success){
		window.location.assign(`/virus/${response.id}`)
	} else {
		store.dispatch({ type: `THEMESSAGE/ERROR`, error: response.message })
	}	
}

export const showMainMenu = () => {
	const store = getStore()
	store.dispatch({ type: `APP/EDITOR_OPEN`, editorOpen: false })
	store.dispatch({ type: `APP/INFO_OPEN`, infoOpen: true })
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
