import React from 'react'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
    makeStyles,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Slide,
    Fab,
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core/'
import { showInfo } from '../redux/app/actions'
import { 
    Icon,
} from './'

const useStyles = makeStyles(theme => ({
  infoDialog: {
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'none',
    boxShadow: 'none',
    border: 'none',
  },
  fixedW: {
    width: 300
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -theme.spacing(),
    right: theme.spacing(),
    margin: '0 auto',
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function Info() {

  const classes = useStyles()
  const dispatch = useDispatch()
  const appSlice = useSelector(state => state.app)
  const {
    infoOpen
  } = appSlice

  const handleClose = () => {
    dispatch({type:`APP/INFO_OPEN`, infoOpen: false})
    dispatch({type:`APP/EDITOR_OPEN`, editorOpen: true})
  }

  return <React.Fragment>

      { !infoOpen ? <AppBar position={`fixed`} className={classes.appBar}>
        <Toolbar>
          <Fab 
            color={`primary`}
            aria-label={`Find out more`}
            className={classes.fabButton}
            onClick={(e) => {
              e.preventDefault()
              showInfo()
            }}>
            <Icon icon={`info`} color={`inherit`} />
          </Fab>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar> : null }

          <Dialog
            className={classes.infoDialog}
            open={infoOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="info-title"
            aria-describedby="info-description"
          >
            <DialogContent>
            <div className={classes.fixedW} />

              <List>
                <ListItem button
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(`https://github.com/weizang-75/ironavirus`, `_blank`)
                  }}
                >
                  <ListItemIcon>
                    <Icon icon={`github`} color={`white`} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={`Open Source`}
                    secondary={`Free on Github`}
                  />
                </ListItem>
              </List>

            </DialogContent>
            <DialogActions>
              <Button 
                variant={`contained`}
                color={`primary`}
                onClick={handleClose} >
                Got it
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
}


/*
          <Fab 
            color={`secondary`} 
            aria-label={`Open Info`} 
            className={classes.fabButton}>
            <Icon icon={`ifon`} color={`inherit`} />
          </Fab>
          */