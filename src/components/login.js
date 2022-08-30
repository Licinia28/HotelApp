import React from 'react'
import "../css/login.css"
import "../App.css"
import {Link} from 'react-router-dom'


const Login = () => {
  return (
    <div className='container'>
        <div className='Image'></div>
         <div className='Login'>

            
         <h1>Login</h1>
           
         <div className='Email'>
                <label>Email</label>
                <input className='input' type="email"/>
            </div>

            <div className='Password'>
                <label>Password</label>
                <input className='input' type="password"/>
            </div>

            <div>
                <button className='login'>Login</button>
            </div> 
        </div>
    </div>
  )
}
export default Login
