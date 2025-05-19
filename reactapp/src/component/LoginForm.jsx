import React from 'react'
import '../App.css'

const LoginForm=()=>{
  const handleInput =() =>{

  }
    return(
      <form className='container'>
        <h3><bold>Login</bold></h3>
        <div className='text'>
  
          <input class ="inp1"type='text'placeholder='Enter Username' onChange={handleInput} />
          <br></br>
        
          <input class='inp1'type='text'placeholder=' Enter Password' onChange={handleInput} />
           <br></br>
           <br></br>
          
         
          <p>Forgot Password ?</p>
        
           <button>Login</button>
           <p>Not a member?<span>Login</span></p>
        </div>
       
      </form>
    )
  }


export default LoginForm