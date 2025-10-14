import React from 'react'
import "../style/SignUp.css";
import { Link } from 'react-router'

export default function SignUp() {
  return (
    <form className='sigup-form'>
      <h1>Create a free account</h1>
      <div className='sinup-div'>
        <label htmlFor='name'>Name <input id='name' required placeholder='Name'></input></label>
        <label htmlFor='email'>Email <input id='email' required placeholder='example@gmail.com'></input></label>
        <label htmlFor='name'>Password <input id='password' required placeholder="••••••••"></input></label>
        <small className="password-help">Password must be at least 8 characters.</small>
        <label htmlFor='name'>Confirm Password <input id='name' required placeholder="••••••••"></input></label>
        <button type='submit' className='signupbtn'>SignUp</button>
      </div>
      <p className='signup-text'>
          Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  )
}
