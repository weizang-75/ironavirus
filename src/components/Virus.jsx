import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { loadVirus } from '../redux/theMessage/actions'
import { 
    useSelector,
} from 'react-redux'
import { 
  makeStyles,
  Backdrop,
  CircularProgress,
  IconButton,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab/'
import { 
  Icon,
  TheMessage 
} from './'


const useStyles = makeStyles(theme => ({
  virus:{
    width: '100vh',
    maxWidth: '100vw',
  },
  alertText:{
    paddingTop: theme.spacing(),
  }
}))

export default function Virus() {
  
  const classes = useStyles()
  const history = useHistory()
  const theMessageSlice = useSelector(state => state.theMessage)
  const {
      virus,
      virusLoading,
      virusLoaded,
      error,
  } = theMessageSlice

  const id = history.location.pathname.split(`/`)[2]
  useEffect(() => {
    if (!virusLoaded && !virusLoading){
      loadVirus(id)
    }
    if (virus){
      // console.log (virus)
    }
  }, [id, virus, virusLoaded, virusLoading])

  if (!virus && virusLoading) {
    return <Backdrop open><CircularProgress /></Backdrop>
  }

  if (!virus && virusLoaded) {
    return <div className={classes.none}>
            <Alert 
              variant={`outlined`}
              severity={`error`}
              action={<IconButton
                        onClick={(e) => {
                          e.preventDefault()
                          window.location.assign(`/`)
                        }}>
                  <Icon icon={`home`} color={`inherit`} />
                </IconButton>}
            >
              <div className={classes.alertText}>
                {error}
              </div>
                
            </Alert>
          </div>
  }
  if (virus){
    const {
      platitudeTop,
      platitudeMiddleA,
      platitudeMiddleB,
      platitudeBottom,
      threatLevel,
    } = virus
    document.title = `<${threatLevel.toUpperCase()}> ${platitudeTop} ${platitudeMiddleA} 
    ${platitudeMiddleB} ${platitudeBottom}`
  }
  
  
  return  <div className={classes.virus}>
            {virus ? <TheMessage virus={virus} /> : null}
          </div>
}
