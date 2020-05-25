import React from 'react'
import { useHistory } from 'react-router-dom'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
    makeStyles,
    // Button,
    Dialog,
    // DialogActions,
    // DialogContent,
    Slide,
    Fab,
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core/'
import { 
  showMainMenu,
} from '../redux/app/actions'
import { 
  newVirus,
} from '../redux/theMessage/actions'
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
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: theme.spacing(2),
    margin: '0 auto',
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

}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function MainMenu() {

  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const appSlice = useSelector(state => state.app)
  const {
    infoOpen
  } = appSlice


  return <React.Fragment>

      { !infoOpen ? <AppBar position={`fixed`} className={classes.appBar}>
        <Toolbar>
          <Fab 
            color={`secondary`}
            aria-label={`Main Menu`}
            className={classes.fabButton}
            onClick={(e) => {
              e.preventDefault()
              showMainMenu()
            }}>
            <Icon icon={`ironavirus`} color={`inherit`} />
          </Fab>
        </Toolbar>
      </AppBar> : null }

          <Dialog
            className={classes.infoDialog}
            open={infoOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => {
              dispatch({type:`APP/INFO_OPEN`, infoOpen: false})
            }}
            aria-labelledby="info-title"
            aria-describedby="info-description">

            <div className={classes.fixedW} />
              <List>

                <ListItem button
                    onClick={(e) => {
                      e.preventDefault()
                      dispatch({ type: `APP/EDITOR_OPEN`, editorOpen: true })
                      dispatch({type:`APP/INFO_OPEN`, infoOpen: false})
                    }}>
                  <ListItemIcon>
                    <Icon icon={`edit`} color={`inherit`} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={`Edit Virus`}
                  />
                </ListItem>

                <ListItem button
                    onClick={(e) => {
                      e.preventDefault()
                      newVirus()
                      dispatch({ type: `APP/EDITOR_OPEN`, editorOpen: true })
                      dispatch({type:`APP/INFO_OPEN`, infoOpen: false})
                    }}>
                  <ListItemIcon>
                    <Icon icon={`add`} color={`inherit`} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={`New Virus`}
                  />
                </ListItem>

                

                <ListItem button
                  onClick={(e) => {
                    e.preventDefault()
                    history.push(`/open-source`)
                    dispatch({type:`APP/INFO_OPEN`, infoOpen: false})
                  }}>
                  <ListItemIcon>
                    <Icon icon={`github`} color={`white`} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={`Open Source`}
                  />
                </ListItem>

                <ListItem button
                  onClick={(e) => {
                    e.preventDefault()
                    history.push(`/share`)
                    dispatch({type:`APP/INFO_OPEN`, infoOpen: false})
                  }}>
                  <ListItemIcon>
                    <Icon icon={`share`} color={`inherit`} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={`Share`}
                  />
                </ListItem>

                <ListItem button
                  onClick={(e) => {
                    e.preventDefault()
                    history.push(`/privacy`)
                    dispatch({type:`APP/INFO_OPEN`, infoOpen: false})
                  }}>
                  <ListItemIcon>
                    <Icon icon={`privacy`} color={`inherit`} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={`Privacy`}
                  />
                </ListItem>
              </List>            
          </Dialog>
        </React.Fragment>
}


/*

<DialogActions>
              <Button 
                variant={`contained`}
                color={`primary`}
                onClick={handleClose} >
                Got it
              </Button>
            </DialogActions>

              <Typography variant={`body2`}>
                vs {pJSON.version}
              </Typography>


          <Fab 
            color={`secondary`} 
            aria-label={`Open Info`} 
            className={classes.fabButton}>
            <Icon icon={`ifon`} color={`inherit`} />
          </Fab>


                          <ListItem button
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(`https://listingslab.com/pwa`, `_blank`)
                  }}
                >
                  <ListItemIcon>
                    <Icon icon={`listingslab`} color={`inherit`} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={`Listingslab`}
                    secondary={`Progressive Web Apps`}
                  />
                </ListItem>

<Typography variant={`body2`}>
                Tired of the same old message? Make your own 厌倦了相同的旧信息？ 自己做
              </Typography>


          */