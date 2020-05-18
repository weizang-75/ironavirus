import React from 'react'
// import { 
//   getStore,
//   getHistory,
// } from '../'
import { signout } from '../redux/app/actions'
import {
  useSelector,
  useDispatch,
} from 'react-redux'
import { 
  makeStyles,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
} from '@material-ui/core'
import { Icon } from './'

const useStyles = makeStyles(theme => ({
  title:{
    display: 'flex',
  },
  titleIcon:{
    flexShrink: 1,
    paddingTop: theme.spacing(),
  },
  titleText:{
    flexShrink: 1,
    marginLeft: theme.spacing(),
    marginTop: theme.spacing(0.5),
  },
  btnText: {
    marginLeft: theme.spacing(),
  },
  dialogContent: {
    minWidth: 350,
  },
}))

export default function Settings() {
	
  const classes = useStyles()
  const dispatch = useDispatch()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const appSlice = useSelector(state => state.app)
  const {
    settings,
  } = appSlice

  if (!settings) return null

  return (
  		<Dialog
        fullScreen={fullScreen}
        open={true}
        onClose={() => {
          dispatch({type: `APP/SETTING`, settings: false})
        }}
        aria-labelledby={`dialog-title`}>

        <DialogTitle id={`dialog-title`}>
          <div className={classes.title}>
            <div className={classes.titleIcon}>
              <Icon icon={`settings`} color={`inherit`} />
            </div>
            <div className={classes.titleText}>
              Settings
            </div>
          </div>
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>

          <Button 
            
            variant={`text`}
            color={`default`}
            onClick={(e) => {
              e.preventDefault()
              window.open(`https://console.firebase.google.com/u/0/project/listingslab-production/storage`, `_blank`)
            }}>
            <Icon icon={`link`} color={`inherit`} />
            <span className={classes.btnText}>Firebase</span>
          </Button>


          <Button 
            variant={`text`}
            color={`default`}
            onClick={(e) => {
              e.preventDefault()
              signout()
              dispatch({type: `APP/SETTINGS`, settings: false})
            }}>
            <Icon icon={`logout`} color={`inherit`} />
            <span className={classes.btnText}>Sign Out</span>
          </Button>


        </DialogContent>

        <DialogActions>
          <Button 
            variant={`text`}
            color={`default`}
            onClick={() => {
              dispatch({type: `APP/SETTINGS`, settings: false})
            }}>
            <Icon icon={`close`} color={`inherit`} />
            <span className={classes.btnText}>Cancel</span>
          </Button>
        </DialogActions>
      </Dialog>
	)
}

