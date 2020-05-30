import React from 'react'
import { 
    useSelector, 
    useDispatch 
} from 'react-redux'
import clsx from 'clsx'
import { 
  makeStyles,
  SwipeableDrawer,
  Backdrop,
  CircularProgress,
} from '@material-ui/core'
import {
  TheMessage, 
  Editor,
  MainMenu,
} from './'

const useStyles = makeStyles(theme => ({
  theMessageOff:{
    width: '80vh',
    maxWidth: '80vw',
  },
  theMessageOn:{
    width: '80vh',
    maxWidth: '80vw',
    position: 'absolute',
    top: 0,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'none',
  },
  drawerDiv:{
    border: '1px solid blue',
  },
}))

export default function UI() {
  
  const classes = useStyles()
  const dispatch = useDispatch()
  const appSlice = useSelector(state => state.app)
  const {
      editorOpen
  } = appSlice

  const theMessageSlice = useSelector(state => state.theMessage)
  const {
      publishing,
  } = theMessageSlice

  const toggleDrawer = (anchor, open) => (event, reason) => {
    if (reason === `backdropClick`) dispatch({ type: `APP/EDITOR_OPEN`, editorOpen: false })
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
  }

  const getEditor = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role={`presentation`}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Editor />
    </div>
  )

  return  <React.Fragment>
            <MainMenu />
            
            { publishing ? <Backdrop className={classes.backdrop} open={true}>
              <CircularProgress color="inherit" />
            </Backdrop> : null }
            
            <div className={!editorOpen ? classes.theMessageOff : classes.theMessageOn }>
              <TheMessage 
                mode={`ui`}
                onClick={(e) => {
                  e.preventDefault()
                  if (!editorOpen){
                    dispatch({ type: `APP/EDITOR_OPEN`, editorOpen: true })
                  }
                }}/>
            </div>

            <SwipeableDrawer
              anchor={`bottom`}
              open={editorOpen}
              onClose={toggleDrawer(`right`, false)}
              onOpen={toggleDrawer(`right`, true)}>
              {getEditor(`right`)}
            </SwipeableDrawer>
          </React.Fragment>
}
