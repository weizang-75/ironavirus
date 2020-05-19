import React from 'react'
import { 
    useSelector, 
    useDispatch 
} from 'react-redux'
import clsx from 'clsx'
import { 
  makeStyles,
  Badge,
  Fab,
  Tooltip,
  SwipeableDrawer,
} from '@material-ui/core'
import { 
  Icon,
  TheMessage, 
  TheMenu,
} from './'

const useStyles = makeStyles(theme => ({
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    margin: '0 auto',
  },
  list: {
    // width: 250,
  },
  fullList: {
    // width: 'auto',
  },
}))

export default function UI() {
  
  const classes = useStyles()
  const dispatch = useDispatch()

  const appSlice = useSelector(state => state.app)
  const {
      uiOpen
  } = appSlice

  // console.log('uiOpen', uiOpen)


  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    // dispatch({ type: `APP/UI_OPEN`, uiOpen: false })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <TheMenu />
    </div>
  )

  return  <React.Fragment>

            <TheMessage />

            <SwipeableDrawer
              anchor={`right`}
              open={uiOpen}
              onClose={toggleDrawer(`right`, false)}
              onOpen={toggleDrawer(`right`, true)}>
              {list(`right`)}
            </SwipeableDrawer>

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

          </React.Fragment>
}

