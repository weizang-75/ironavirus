import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from '@material-ui/core'
import Draggable from 'react-draggable'

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
}

export default function Info() {
  return <Dialog
        open={true}
        onClose={() => {}}
        PaperComponent={PaperComponent}
        aria-labelledby="pushToTalk-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="pushToTalk-title">
          Push To Talk
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            variant={`text`}
            onClick={() => {}} 
            color={`secondary`}
          >
            Cancel
          </Button>
          <Button 
            variant={`contained`}
            onClick={() => {}} 
            color={`secondary`}
          >
            Talk
          </Button>
        </DialogActions>
      </Dialog>
}
