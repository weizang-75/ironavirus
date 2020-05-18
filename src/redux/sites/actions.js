import { createAction } from '@reduxjs/toolkit'
import { getStore, getFStore } from '../../'

export const reset = createAction(`MANAGER/SITES/RESET`)
export const error = createAction(`MANAGER/SITES/ERROR`)
export const loading = createAction(`MANAGER/SITES/LOADING`)
export const loaded = createAction(`MANAGER/SITES/LOADED`)
export const updateList = createAction(`MANAGER/SITES/UPDATELIST`)
export const attempts = createAction(`MANAGER/SITES/ATTEMPTS`)
export const creating = createAction(`MANAGER/SITES/CREATING`)
export const deleting = createAction(`MANAGER/SITES/DELETING`)
export const updating = createAction(`MANAGER/SITES/UPDATING`)


export const createSite = site => {
	const store = getStore()
	store.dispatch({ type: `MANAGER/SITES/CREATING`, creating: true })
	const db = getFStore()
	const docRef = db.collection(`sites`)
	docRef
		.add(site)
		.then(function (doc) {
			store.dispatch({ type: `MANAGER/SITES/CREATING`, creating: false })
			store.dispatch({ type: `MANAGER/SITES/RESET`, reset: true })
			store.dispatch({ 
  				type: `APP/SNACKBAR/OPEN`, 
  				alertMessage: `${site.title} added OK`, 
  				severity:`success` 
  			})
		})
		.catch(function (error){
			console.log (error)
			store.dispatch({ type: `MANAGER/SITES/ERROR`, error: error.toString() } )
			store.dispatch({ type: `MANAGER/SITES/CREATING`, creating: false })
			store.dispatch({ type: `MANAGER/SITES/RESET`, reset: true })
		})
}

export const readSites = () => {
	const limit = 1000
	const store = getStore()
	store.dispatch({ type: `MANAGER/SITES/ATTEMPTS` })
	store.dispatch({ type: `MANAGER/SITES/LOADING`, loading: true })
	store.dispatch({ type: `MANAGER/SITES/LOADED`, loaded: false })
	store.dispatch({ type: `MANAGER/SITES/UPDATELIST`, list: [] })
	const db = getFStore()
	const docRef = db.collection(`sites`).orderBy('updated', 'desc').limit(limit)
	docRef
		.get()
		.then(function (snap) {
			let list = []
			snap.forEach(function(doc) {
				list.push({
					id: doc.id,
					data: doc.data()
				})
			})
			store.dispatch({ type: `MANAGER/SITES/UPDATELIST`, list })
			store.dispatch({ type: `MANAGER/SITES/LOADING`, loading: false })
			store.dispatch({ type: `MANAGER/SITES/LOADED`, loaded: true })
		})
		.catch(function (error){
			store.dispatch({ type: `MANAGER/SITES/ERROR`, error: error.toString() } )
			store.dispatch({ type: `MANAGER/SITES/LOADING`, loading: false })
			store.dispatch({ type: `MANAGER/SITES/LOADED`, loaded: true })
		})
}

export const updateSite= (id, site) => {
	const {title} = site
	const store = getStore()
	const db = getFStore()
	store.dispatch({ type: `MANAGER/SITES/UPDATING`, updating: true })
	const docRef = db.collection(`sites`).doc(id)
		docRef
			.set(site)
			.then (function (res){
				store.dispatch({ type: `MANAGER/SITES/UPDATING`, deleting: false })
				store.dispatch({ type: `MANAGER/SITES/RESET`, reset: true })
				store.dispatch({ 
	  				type: `APP/SNACKBAR/OPEN`, 
	  				alertMessage: `${title} updated`, 
	  				severity:`success` 
	  			})
			})
			.catch(function (error){
				store.dispatch({ type: `MANAGER/SITES/ERROR`, error: error.toString() } )
				store.dispatch({ type: `MANAGER/SITES/UPDATING`, deleting: false })
				store.dispatch({ type: `MANAGER/SITES/RESET`, reset: true })
			})
}

export const deleteSite = (id, title) => {
	const store = getStore()
	const db = getFStore()
	store.dispatch({ type: `MANAGER/SITES/DELETING`, deleting: true })
	const docRef = db.collection(`sites`).doc(id)
		docRef
			.delete()
			.then (function (res){
				store.dispatch({ type: `MANAGER/SITES/DELETING`, deleting: false })
				store.dispatch({ type: `MANAGER/SITES/RESET`, reset: true })
				store.dispatch({ 
	  				type: `APP/SNACKBAR/OPEN`, 
	  				alertMessage: `${title} deleted`, 
	  				severity:`success` 
	  			})
			})
			.catch(function (error){
				store.dispatch({ type: `MANAGER/SITES/ERROR`, error: error.toString() } )
				store.dispatch({ type: `MANAGER/SITES/DELETING`, deleting: false })
				store.dispatch({ type: `MANAGER/SITES/RESET`, reset: true })
			})
}
