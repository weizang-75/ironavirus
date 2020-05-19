import React from 'react'
import clsx from 'clsx'
import { 
  makeStyles,
  Badge,
  Fab,
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  SwipeableDrawer,
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import { 
  Icon,
  TheMessage, 
} from './'

const useStyles = makeStyles(theme => ({
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    margin: '0 auto',
  },
}))

export default function UI() {
  
  const classes = useStyles()

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [anchor]: open })
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



      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return  <React.Fragment>
            <TheMessage />

            <SwipeableDrawer
              anchor={`right`}
              open={true}
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
                  toggleDrawer(`right`, true)
                  console.log (`toggleDrawer`)
                }}>
                  <Badge badgeContent={0} color={`primary`}>
                    <Icon icon={`ui`} color={`inherit`} />
                  </Badge> 
              </Fab>
            </Tooltip>
          </React.Fragment>
}

