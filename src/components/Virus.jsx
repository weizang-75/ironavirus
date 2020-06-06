import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { loadVirus } from '../redux/theMessage/actions'
import { showSpreadMenu } from '../redux/app/actions'
import { 
    useSelector,
} from 'react-redux'
import { 
  makeStyles,
  Button,
  Backdrop,
  CircularProgress,
  // Fab,
  AppBar,
  Toolbar,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab/'
import { 
  Icon,
  TheMessage,
  SpreadMenu,
} from './'

const useStyles = makeStyles(theme => ({
  virus:{
    width: '80vh',
    maxWidth: '80vw',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'none',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'none',
    boxShadow: 'none',
    border: 'none',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: theme.spacing(2),
    margin: '0 auto',
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
    return <Backdrop open  className={classes.backdrop}><CircularProgress /></Backdrop>
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

  let virusTitle 
  if (virus){
    const {
      platitudeTop,
      platitudeMiddleA,
      platitudeMiddleB,
      platitudeBottom,
      // threatLevel,
    } = virus
    // ${threatLevel.toUpperCase()}! 
    virusTitle = `${platitudeTop.toUpperCase()} ${platitudeMiddleA.toUpperCase()} ${platitudeMiddleB.toUpperCase()} ${platitudeBottom.toUpperCase()}`
    document.title = virusTitle
  }
  
  return  <React.Fragment>
            <SpreadMenu id={id} virusTitle={virusTitle} />
            
            <div className={classes.virus}>
              {virus ? <TheMessage 
                virus={virus} 
                onClick={(e) => {
                    e.preventDefault()
                    showSpreadMenu()
                  }}
              /> : null}

              <AppBar position={`fixed`} className={classes.appBar}>
                <Toolbar>


                  <Button 
                    color={`primary`}
                    variant={`contained`}
                    className={classes.newButton}
                    onClick={(e) => {
                      e.preventDefault()
                      showSpreadMenu()
                    }}>
                      Spread Virus
                  </Button>

                </Toolbar>
              </AppBar>
            </div>
          </React.Fragment>
}






/*


                  <Fab 
                    color={`primary`}
                    aria-label={`Virus Menu`}
                    className={classes.none}
                    onClick={(e) => {
                      e.preventDefault()
                      showSpreadMenu()
                    }}>
                    <Icon icon={`share`} color={`inherit`} />
                  </Fab>

                  
    <Grid container>
      <Grid item xs={12} md={6}>
        <Spread id={id} virusTitle={virusTitle}/>
      </Grid>
      <Grid item xs={12} md={6}>
      
      </Grid>
    </Grid>
*/