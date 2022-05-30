import React, { useState } from 'react'
import AddBlogInput from './AddBlogInput'

const AddBlog = () => {
  const [blog, setBlog] = useState({
    blogTitle:"",
    blogAbout:""
  })
  const Bloginputs =[
    {
      id:1,
      name: "BlogTitle",
      type: "text",
      placeholder:"Title",
      label:"Title"
    }
//     ,
//     {
//       id:2,
//       name: "AboutBlog",
//       type: "text",
//       placeholder:"Message",
//       label:"Message"
//     }
  ]
  // const inputs2 =[
  //   {
  //     id:2,
  //     name: "AboutBlog",
  //     type: "text",
  //     placeholder:"Message",
  //     label:"Message"
  //   }
  //  ]
  const handleSubmit= (e) =>{
    e.preventDefault()
  }
  const onChange= (e) => {
    setBlog({...blog, [e.target.name]: e.target.value})
  }
  console.log(blog)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add Blog</h1>
        {Bloginputs.map((input)=>(
          <AddBlogInput
            key={input.id}
            {...input}
            value={blog[input.name]}
            onChange={onChange}
          />
        ))}
        {/* {inputs2.map((textarea)=>(
          <AddBlog
            key={textarea.id}
            {...textarea}
            value={blog[textarea.name]}
            onChange={onChange}
          />
        ))} */}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddBlog
