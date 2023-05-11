import { TextField, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';


function InputBox({type,controlname,errors,isautoFocused,label,isfullWidth,isRequired,form}) {
  return (
    <>
    <TextField
                sx={{
                  "& .MuiOutlinedInput-root":{
                    "& > fieldset": {
                      borderColor: "#ffffff",
                     }
                  }
                }}
                  autoComplete="given-name"
                  name={controlname}
                  required={isRequired}
                  fullWidth={isfullWidth}
                  type={type}
                  id={controlname}
                  label={label}
                  autoFocus={isautoFocused}
                  {...form(controlname)}
                  error={errors?true:false}
                  maxlength
                />
                <Typography variant="inherit" color="#ff0000">
                {errors?.message}
              </Typography>
    </>
  )
}
InputBox.propTypes={
    type:PropTypes.string,
    controlname:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    form:PropTypes.func,
    isautoFocused:PropTypes.bool,
    isfullWidth:PropTypes.bool,
    isRequired:PropTypes.bool,
    errors:PropTypes.object,
}
InputBox.defaultProps={
    type:'text',
    isautoFocused:false,
    isfullWidth:true,
    isRequired:false,
    errors:null
}

export default InputBox