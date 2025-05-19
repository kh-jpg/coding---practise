import React from 'react'
import '../App.css'

const ChangePasswordForm=()=>{
  const handleInput =() =>{

  }
    return(
      <form className='container'>
        <h2><bold>Change Password</bold></h2>
        <div className='text'>
           
          <br></br>
          <input class ="inp1"type='text'placeholder='New Password' onChange={handleInput} />
          <br></br>
          <input class='inp1'type='text'placeholder=' Confirm New Password' onChange={handleInput} />
          
           <br></br>
          
          <p>Change your Password ?</p>
         
           <button>Change Password</button>
         
        </div>
       
      </form>
    )
  }


export default ChangePasswordForm