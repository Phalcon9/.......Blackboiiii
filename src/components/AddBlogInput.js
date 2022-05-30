import React from 'react'

const AddBlogInput = (props) => {
    const {label, onChange, id, ...inputProps} = props;
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} />
        {<textarea {...inputProps} onChange={onChange} />}
    </div>
  )
}
export default AddBlogInput
