import React from 'react'
import { 
    useSelector, 
    useDispatch 
} from 'react-redux'
import clsx from 'clsx'
import { 
  makeStyles,
  SwipeableDrawer,
} from '@material-ui/core'
import {
  TheMessage, 
  TheMenu,
} from './'
import { init } from '../redux/theMessage/actions'

const useStyles = makeStyles(theme => ({
  theMessageOff:{
    width: '100vh',
  },
  theMessageOn:{
    width: '100vh',
    position: 'absolute',
    left: 0,
  },


}))

export default function UI() {
  
  const classes = useStyles()
  const dispatch = useDispatch()
  const appSlice = useSelector(state => state.app)
  const {
      uiOpen
  } = appSlice

  const theMessageSlice = useSelector(state => state.theMessage)
  const {
      initted
  } = theMessageSlice



  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role={`presentation`}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <TheMenu />
    </div>
  )

  return  <React.Fragment>
            <div className={!uiOpen ? classes.theMessageOff : classes.theMessageOn }>
              <TheMessage onClick={(e) => {
                e.preventDefault()
                if (!uiOpen){
                  dispatch({ type: `APP/UI_OPEN`, uiOpen: true })
                  if (!initted){
                    init()
                  }
                }
              }}/>  
          </div>
            <SwipeableDrawer
              anchor={`right`}
              open={uiOpen}
              onClose={toggleDrawer(`right`, false)}
              onOpen={toggleDrawer(`right`, true)}>
              {list(`right`)}
            </SwipeableDrawer>
          </React.Fragment>
}




















/*


    <Tooltip title={`点击这里`}>
      <Fab 
        color={`primary`} 
        aria-label={`点击这里`}
        className={classes.fabButton}
        onClick={(e) => {
          e.preventDefault()
          dispatch({ type: `APP/UI_OPEN`, uiOpen: true })
        }}>
          <Badge badgeContent={0} color={`primary`}>
            <Icon icon={`ui`} color={`inherit`} />
          </Badge> 
      </Fab>
    </Tooltip>


    Badge,
    Fab,
    Tooltip,


      fabButton: {
        position: 'absolute',
        zIndex: 1,
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        margin: '0 auto',
      },



*/