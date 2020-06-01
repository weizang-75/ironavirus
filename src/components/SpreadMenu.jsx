import React from 'react'
import { useHistory } from 'react-router-dom'
import { Share } from 'react-facebook'
import { TwitterShareButton } from 'react-share';

import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
    makeStyles,
    Button,
    Dialog,
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
  showSpreadMenu,
} from '../redux/app/actions'
import { 
    Icon,
    // CopyUrl,
} from './'

const useStyles = makeStyles(theme => ({
  infoDialog: {
  },
  fbBtn:{
    paddingLeft: theme.spacing(1.25),
  },
  twBtn:{
    paddingLeft: theme.spacing(-1),
  },
  fbBtnTxt:{
    paddingLeft: theme.spacing(4),
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

export default function SpreadMenu(props) {

  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const appSlice = useSelector(state => state.app)
  const {
    spreadOpen
  } = appSlice
  
  const { 
    id,
    virusTitle,
  } = props

  return <React.Fragment>

      { !spreadOpen ? <AppBar position={`fixed`} className={classes.appBar}>
        <Toolbar>
          <Fab 
            color={`primary`}
            aria-label={`Main Menu`}
            className={classes.fabButton}
            onClick={(e) => {
              e.preventDefault()
              showSpreadMenu()
            }}>
            <Icon icon={`menu`} color={`inherit`} />
          </Fab>
        </Toolbar>
      </AppBar> : null }

          <Dialog
            className={classes.infoDialog}
            open={spreadOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => {
              dispatch({type:`APP/SPREAD_OPEN`, spreadOpen: false})
            }}
            aria-labelledby="info-title"
            aria-describedby="info-description">

            <div className={classes.fixedW} />
              <List>

                <ListItem>
                  <ListItemIcon>
                    <Icon icon={`ironavirus`} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={`IRONAVIRUS`}
                  />
                </ListItem>


                <div className={classes.fbBtn}>
                  <Share 
                    href={ `https://ironavirus.web.app/virus/${id}` }
                    hashtag={ `#ironavirus` }
                    quote={ virusTitle }>
                    {({ handleClick, loading }) => (
                      <Button 

                        type="button" 
                        onClick={handleClick}>
                        <Icon icon={`facebook`} color={`#01a43b`} />
                        <span className={classes.fbBtnTxt}>
                          Spread on Facebook
                        </span>
                      </Button>
                    )}
                  </Share>
                </div>

                

                  <TwitterShareButton
                    className={classes.none}
                    url={`https://ironavirus.web.app/virus/${id}`}
                    title={virusTitle}
                  >
                  <ListItem button>
                    <ListItemIcon>
                      <div className={classes.twBtn}>
                        <Icon icon={`twitter`} color={`#01a43b`} />
                      </div>
                    </ListItemIcon>
                    <ListItemText 
                      primary={`SPREAD ON TWITTER`}
                    />
                  </ListItem>      
                    
                  </TwitterShareButton>
                

                
                <ListItem button
                    onClick={(e) => {
                      e.preventDefault()
                      history.push('/virus/new')
                      dispatch({type: `APP/SPREAD_OPEN`, spreadOpen: false})
                      window.location.assign('/virus/new', `_self`)
                    }}>
                  <ListItemIcon>
                    <Icon icon={`add`} color={`error`} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={`NEW VIRUS`}
                  />
                </ListItem>

              </List>            

          </Dialog>
        </React.Fragment>
}

/*

<CopyUrl id={id} />

  <ListItem button
      onClick={(e) => {
        e.preventDefault()
        const url = `https://ironavirus.web.app/virus/${id}`
        copyToClipboard(url)
      }}>
    <ListItemIcon>
      <Icon icon={`copy`} color={`error`} />
    </ListItemIcon>
    <ListItemText 
      primary={`Copy URL`}
    />
  </ListItem>

                <ListItem 
                button
                    onClick={(e) => {
                      e.preventDefault()
                      // history.push('/virus/new')
                      // dispatch({type: `APP/SPREAD_OPEN`, spreadOpen: false})
                      // window.location.assign('/virus/new', `_self`)
                    }}>
                  <ListItemIcon>
                    <Icon icon={`twitter`} color={`#01a43b`} />
                  </ListItemIcon>


                  <ListItemText 
                    primary={`SPREAD ON TWITTER`}
                  />
                </ListItem>
*/
