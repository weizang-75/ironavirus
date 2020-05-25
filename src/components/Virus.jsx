import React from 'react'
import { useHistory } from 'react-router-dom'
import { 
    // useSelector, 
    // useDispatch 
} from 'react-redux'
import { 
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  virus:{
    border: '1px solid red',
    background: 'white',
    padding: theme.spacing(2),
  }
}))

export default function Virus() {
  
  const classes = useStyles()
  // const dispatch = useDispatch()
  const history = useHistory()
  // const appSlice = useSelector(state => state.app)
  // const {
  //     editorOpen
  // } = appSlice

  console.log (history.location.pathname.split(`/`)[2])

  return  <div className={classes.virus}>
            a. virus
          </div>
}
