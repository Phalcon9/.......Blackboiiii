import {useState} from 'react'
import LoginInput from './LoginInput'

const Login = () => {
    const [values, setValues] = useState({
        username: "",
        password: ""
      })
    
      const inputs =[
        {
          id:1,
          name: "username",
          type: "text",
          placeholder:"Username",
          errorMessage:"Incorrect username or password",
          label:"Username",
         
        },
        {
          id:2,
          name: "password",
          type: "password",
          placeholder:"Password",
          errorMessage:"Incorrect username or password",
          label:"Password",
          
         
        }
      ]
    
    
      const handleSubmit = (e) => {
        e.preventDefault()
      }
    
      const onChange = (e)=> {
        setValues({...values, [e.target.name]: e.target.value })
      }
    
      console.log(values)
  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
                {inputs.map((input) => (
            <LoginInput 
              key={input.id} 
              {...input} 
              value={values[input.name]} 
              onChange={onChange} 
            />
            ))}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login