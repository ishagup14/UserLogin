import React, { useState } from 'react'
import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () =>{
    if(!email || !password)
      setError("Email and password are required");
      return;
  }

  return (
    <div>
      <div className='login__header'>
        <h1>Login here</h1>
      </div>
      <div className='login__header_msg'>
        <span>Welcome back you’ve</span>
        <span>been missed!</span>
      </div>
      <div>
        <form className='login__form'>
          <input className='login__input' 
          type="email" 
          name="email"
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}
          id="email"
          placeholder="Email" 
           /><br />

          <input className='login__input' 
          type="password" 
          name="pass" 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          id="pass" 

          placeholder="Password" 
          /><br />

          <div className='login__forgotpassword__main'>
            <span className='login__forgotpassword'>Forgot your password?</span>
          </div>

          {error && <div>{error}</div>}
          <div className='login__button'>
            <button className='login__button1'
            onClick={handleLogin} 
            type="submit">
            Sign In
            </button><br />
          </div>
          <div><button className='login__button2'><Link to="/createaccount" style={{ textDecoration: "none" }}>Create new account</Link></button><br /></div>
        </form>
      </div>
    </div>
  )
}
export default Login;