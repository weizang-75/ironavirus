import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'

// PWA Plugins
import { PushToTalk } from './plugins/PushToTalk'

import { FacebookProvider } from 'react-facebook'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import WebFont from 'webfontloader'
import firebase from '@firebase/app'
import '@firebase/firestore'
import { 
  MuiThemeProvider, 
  createMuiTheme 
} from '@material-ui/core/styles'
import { muiTheme } from './utils/mui.js'
import { Provider } from 'react-redux'
import reduxStore from './redux'
import { 
  Public,
  SimpleSnackbar,
  Privacy,
  OpenSource,
  Virus,
} from './components'



import * as serviceWorker from './serviceWorker'

console.log(`${pJSON.name} ${pJSON.version} (${process.env.REACT_APP_ENV})`)
// document.title = `${document.title} ${process.env.REACT_APP_ENV === 'DEV' ? `DEV` : `PROD`} ${pJSON.version}`

WebFont.load({
  google: {
    families: ['Hind:700', 'sans-serif']
  }
});

const fireConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
}

const fBase = firebase.initializeApp(fireConfig)
const getFBase = () => { return fBase }
export { getFBase }

const getHistory = () => { return createBrowserHistory() }
export { getHistory }

const fStore = firebase.firestore()
const getFStore = () => { return fStore }
export { getFStore }

const store = reduxStore()
const getStore = () => {
  return store
}
export { getStore }

let app = (
  <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
    <PushToTalk />
    <Router>
      { store.getState().app.snackbar ? null : <SimpleSnackbar /> }
      
      <Switch>
        <Route exact path='/' render={ props => { return <Public /> }} />
        <Route exact path='/virus/new' render={ props => { return <Public mode={`new`}/> }} />
        <Route exact path='/virus/:slug' render={ props => { return <Virus /> }} />
        <Route exact path='/privacy' render={ props => { return <Privacy /> }} />
        <Route exact path='/open-source' render={ props => { return <OpenSource /> }} />
        <Route component={ Public } />
      </Switch>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render((
  <Provider store={store}>
    <FacebookProvider appId="641660513053302">
      {app}
    </FacebookProvider>
  </Provider>
), document.getElementById('app'))

serviceWorker.register()