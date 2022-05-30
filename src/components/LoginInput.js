import React from 'react'
import "./login.css"

const LoginInput = (props) => {
  const {label, errorMessage ,onChange, id, ...inputProps} = props; 

  
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  )
}

export default LoginInput