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
    top: -theme.spacing(),
    right: theme.spacing(),
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
                  console.log (`Open Inferface`)
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