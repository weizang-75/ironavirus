import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Badge,
    Toolbar,
    Fab,
} from '@material-ui/core'
import { Icon } from './'

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'none',
    boxShadow: 'none',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}))

export default function BottomAppbar(props) {
  
  const classes = useStyles()

  return (
    <React.Fragment>
      {props.children}
      <AppBar 
        position={`fixed`}
        color={`primary`} 
        className={classes.appBar}>
        <Toolbar>   
              <Fab 
                color={`primary`} 
                aria-label={`Manager`}
                className={classes.fabButton}
                onClick={(e) => {
                  e.preventDefault()
                  // dispatch({type: `APP/MESSAGES/TOGGLE`, messagesOpen: true})
                  // history.push(`/push-to-talk`)
                  console.log (`/push-to-talk`)
                }}>
                  <Badge badgeContent={0} color={`primary`}>
                    <Icon icon={`pushToTalk`} color={`inherit`} />
                  </Badge> 
              </Fab> 
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

/* */