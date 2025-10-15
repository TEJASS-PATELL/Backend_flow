import React from 'react'
import "../style/SignUp.css";
import { Link } from 'react-router'

export default function SignUp() {
  return (
    <div className="main-container">
      <form className='sigup-form'>
        <h1>Create a free account</h1>
        <div className='sinup-div'>
          <label htmlFor='name'>Name <input id='name' required placeholder='Name'></input></label>
          <label htmlFor='email'>Email <input id='email' required placeholder='example@gmail.com'></input></label>
          <label htmlFor='password'>Password <input id='password' required placeholder="••••••••"></input></label>
          <small className="password-help">Password must be at least 8 characters.</small>
          <label htmlFor='confirmpassword'>Confirm Password <input id='confirmpassword' required placeholder="••••••••"></input></label>
          <div className="checkbox-container">
            <input type="checkbox" id="terms" required />
            <Link to="/terms-and-conditions">I agree to the Terms & Conditions</Link>
          </div>
          <button type='submit' className='signupbtn'>SignUp</button>
        </div>
        <p className='signup-text'>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}
