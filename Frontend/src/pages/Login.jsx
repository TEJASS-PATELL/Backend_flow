import React from 'react'
import { Link } from 'react-router'
import "../style/Login.css"
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
    return (
        <div className="main-container">
        <form className='login-form'>
            <h1>Welcome Back!!</h1>
            <div className='login-div'>
                <label htmlFor='email'>Email 
                    <input id='email' type='text' placeholder='Enter your email' required></input>
                </label>
                <div className="password-row">
                    <label htmlFor='password'>Password 
                        <input id='password' type="password" placeholder='Enter password' autoComplete='off' required>
                        </input>
                    </label>
                    <Link to="/forgot-password" className='forgot-link'>Forgot password?</Link>
                </div>
                <button type='submit' className='loginbtn'>Login</button>
                <div className="dividerr"><span>OR</span></div>
                <button type='button' className='googlebtn'><FcGoogle size={20} /> Login With Google</button>
            </div>
            <p className='login-text'>
                Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
        </form>
        </div>
    )
}
