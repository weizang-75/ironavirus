
import React from 'react'
import {
    OutlinedInput,
    InputLabel,
    FormControl,
    FormHelperText,
} from '@material-ui/core'

export default function InputTextfield(props) {
    
  const { 
    field,
  } = props

  const {
    autoFocus,
    id,
    disabled,
    error,
    required,
    value,
    label,
    helper,
    onChange,
    multiline,
    rows,
  } = field
  
  return (
    <React.Fragment>
          <FormControl fullWidth>
            <InputLabel htmlFor={`field-${id}`}>
              {label}
            </InputLabel>
            <OutlinedInput
              id={`field-${id}`}
              disabled={disabled ? disabled : false}
              autoFocus={autoFocus ? autoFocus : false}
              required={required}
              error={error}
              value={value}
              multiline={multiline ? true : false}
              rows={multiline ? rows : null}
              onChange={(e) => {
                onChange(e.target.value)
              }}
              aria-describedby={`${id}-helper-text`}
                inputProps={{
                  'aria-label': helper,
              }}
            />
            <FormHelperText id={`${id}-helper-text`}>
              {helper}
            </FormHelperText>
          </FormControl>      
    </React.Fragment>
  )
}
