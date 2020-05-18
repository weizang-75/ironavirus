import React from 'react'
import { useHistory } from 'react-router-dom'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
    makeStyles,
    // Badge,
    AppBar,
    ButtonBase,
    IconButton,
    Toolbar,
    Typography,
    Hidden,
} from '@material-ui/core/';
import {
    Icon,
} from './'

const useStyles = makeStyles(theme => ({
  topAppBar:{

  },
  grow: {
    flexGrow: 1,
  },
  blokey:{
    marginRight: theme.spacing()
  },
}))

export default function TopAppbar(props) {
  
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const appSlice = useSelector(state => state.app)
  const { 
    menuOpen,
  } = appSlice

  return (
    <div className={classes.grow}>
      <AppBar position={`fixed`} className={classes.topAppBar}>
        <Toolbar className={classes.topToolbar}>
            <ButtonBase
              onClick={(e) => {
                  e.preventDefault()
                  dispatch({type: `APP/LOGIN_CONTACT`, loginContact: false})
                  history.push(`/`)
              }}>
            <div className={classes.blokey} >
              <Icon icon={`blokey`} color={`#FFFFFF`} />
            </div>
            <Typography variant={`h6`} color={`secondary`}>
              {`lisitingslab`}
            </Typography>
          </ButtonBase>
          
          <div className={classes.grow} />
            
          <IconButton
              edge={`end`}
              className={classes.menuButton}
              color={`inherit`}
              onClick={(e) => {
                e.preventDefault()
                dispatch({type: `APP/SETTINGS`, settings: true})
              }}>
              <Icon icon={`settings`} color={`secondary`} />
            </IconButton>

            
            
          <Hidden mdUp>

            <IconButton
              edge={`end`}
              className={classes.menuButton}
              color={`inherit`}
              onClick={(e) => {
                e.preventDefault()
                dispatch({type: `APP/MENU_OPEN`, menuOpen: !menuOpen})
              }}>
              <Icon icon={`menu`} color={`secondary`} />
            </IconButton>
          </Hidden>
          
        </Toolbar>
      </AppBar>
    </div>
  )
}












/*
  scrap
*/