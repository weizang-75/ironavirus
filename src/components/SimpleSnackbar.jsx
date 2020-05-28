import React from 'react'
import { 
  useSelector,
  useDispatch,
} from 'react-redux'
import {
    Snackbar,
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SimpleSnackbar() {

  const closeDelaySeconds = 5 
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(true)
  const appSlice = useSelector(state => state.app)
  const { snackbar } = appSlice
  if (!snackbar) return null
  const { 
    message,
    severity,
  } =  snackbar
  
  const handleClose = (event, reason) => {
    dispatch({type: `APP/SNACKBAR`, snackbar: null})
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={closeDelaySeconds * 1000}
        onClose={handleClose}>
        <Alert 
          variant={`filled`}
          onClose={handleClose} 
          severity={severity}>
          {message}
        </Alert>
      </Snackbar>
  )
}
