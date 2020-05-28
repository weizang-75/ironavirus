import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import {
  useDispatch,
} from 'react-redux'
import { 
    Icon,
} from './'

export default function CopyUrl(props) {
  const dispatch = useDispatch()

  const {id} = props
  if (!id) return null

  const copyToClipboard = str => {
    const el = document.createElement('textarea')
    el.value = str
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  return <Input
            fullWidth
            disabled
            value={`https.../${id}`}
            endAdornment={
              <InputAdornment position={`end`}>
                <IconButton
                  aria-label={`Copy to clipboard`}
                  edge={`end`}
                  onClick={(e) => {
                    e.preventDefault()
                    const url = `https://ironavirus.web.app/virus/${id}`
                    copyToClipboard(url)
                    dispatch({type: `APP/SNACKBAR`, snackbar: {
                      message: `Virus copied to clipboard`,
                      severity: `success`,
                    }})
                  }}>
                  <Icon icon={`copy`} color={`inherit`} />
                </IconButton>
              </InputAdornment>
            }/>
}
