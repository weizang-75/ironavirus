import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { loadVirus } from '../redux/theMessage/actions'
import { 
    useSelector,
} from 'react-redux'
import { 
  makeStyles,
  Button,
  Backdrop,
  CircularProgress,
  Grid,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab/'
import { 
  Icon,
  TheMessage,
  Spread,
} from './'


const useStyles = makeStyles(theme => ({
  virus:{
    width: '99vh',
    maxWidth: '99vw',
  },
  newBtn:{
    marginTop: theme.spacing(2),
  },
  alertText:{
    paddingTop: theme.spacing(),
  },
  btnTxt:{
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
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
  }, [id, virus, virusLoaded, virusLoading])

  if (!virus && virusLoading) {
    return <Backdrop open><CircularProgress /></Backdrop>
  }

  if (!virus && virusLoaded) {
    return <div className={classes.none}>
            <Alert 
              variant={`outlined`}
              severity={`error`}
              action={null}>
              <div className={classes.alertText}>
                {error}
              </div>
              <div className={classes.newBtn}>
                <Button
                  variant={`contained`}
                  color={`primary`}
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.assign(`/`)
                  }}>
                  <Icon icon={`ironavirus`} color={`none`} />
                  <span className={classes.btnTxt}>
                    New Virus
                  </span>
                </Button>
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
                <Spread id={id}/>
              </Grid>
              <Grid item xs={12} md={6}>
              {virus ? <TheMessage virus={virus} /> : null}
              </Grid>
            </Grid>
          </div>
}
