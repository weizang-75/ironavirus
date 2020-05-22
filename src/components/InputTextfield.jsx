
import React from 'react'
import {
    FilledInput,
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
    // defaultValue,
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
          <FormControl>
            <InputLabel htmlFor={`field-${id}`}>
              {label}
            </InputLabel>
            <FilledInput
              autoComplete={`off`}
              id={`field-${id}`}
              disabled={disabled ? disabled : false}
              // defaultValue={defaultValue ? defaultValue : ``}
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
