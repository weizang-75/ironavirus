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
  Grid,
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
  },
  spread:{
    padding: theme.spacing(2),
    background: 'white',
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
              variant={`filled`}
              severity={`error`}
              action={<IconButton
                        onClick={(e) => {
                          e.preventDefault()
                          window.location.assign(`/`)
                        }}>
                  <Icon icon={`home`} color={`inherit`} />
                </IconButton>}>
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
            <Grid container>
              <Grid item xs={12} md={6}>
              <div className={classes.spread}>
              Spread This Virus
            </div>
              </Grid>
              <Grid item xs={12} md={6}>
              {virus ? <TheMessage virus={virus} /> : null}
              </Grid>
            </Grid>
            
            
            
          </div>
}
