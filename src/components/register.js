import React from 'react'
import "../css/register.css"
import {Link} from "react-router-dom"



const Register = () => {
  return (
   <>
   
    <div className='container'>

    <div className='logo'>
    <h1>JUBILANT PALACE</h1>
   </div>


    <div className='middle-wrapper'>
    <Link to={'/'}>Login</Link>
    <Link to={'Register'}>  Register </Link>
    </div>


        <div className='pic'></div>
        <div className='Register'>
        <h2>Register</h2>

        <div className='input'>
            <label>Name</label>
            <input  typeof='name'/>
        </div>

        <div className='input'>
            <label>Surname</label>
            <input typeof='surname'/>
        </div>

        <div className='input'>
            <label>Address</label>
            <input className='input' typeof='address'/>
        </div>

        <div className='input'>
            <label>Country</label>
            <input  typeof='country'/>
        </div>

        <div className='input'>
            <label>City</label>
            <input  typeof='city'/>
        </div>

        <div className='input'>
            <label>Phone</label>
            <input typeof='text'/>
        </div>

        <div className='input'>
            <label>Email Address</label>
            <input typeof='Email'/>
        </div>

        <div className='input'>
            <label>Password</label>
            <input  typeof='password'/>
        </div>

        <div className='btn_signUp'>
            <button className='login'>Signup</button>
        </div>
     </div>
    </div>
   </>     
  )
}

export default Register
