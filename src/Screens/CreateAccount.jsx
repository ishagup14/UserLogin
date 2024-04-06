import React, { useState } from 'react'
import "./CreateAccount.css"
import { Link } from 'react-router-dom';

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password || !confirmpass)
      setError("All fields are required");
    return;
  }

  return (
    <div>
      <div className='acc__header'>
        <h1>Create Account</h1>
      </div>
      <div className='acc__header_msg'>
        <span>Create an account so you can explore all the </span>
        <span>existing jobs</span>
      </div>
      <form className='acc__form'>
        <input className='acc__input'
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="Email"
        />
        <br />

        <input className='acc__input1'
          type="password"
          name="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="pass"
          placeholder="Password"
        /><br />

        <input className='acc__input1'
          type="password"
          name="confirmpass"
          value={confirmpass}
          onChange={(e) => setConfirmPass(e.target.value)}
          id="confirmpass"
          placeholder="Confirm Password"
        /><br />
        <div className='acc__forgotpassword__main'>
          <span className='acc__forgotpassword'>Forgot your password?</span>
        </div>

        {error && <div>{error}</div>}
        <div className='acc__button'>
          <button
            className='acc__button1'
            onClick={handleLogin}
            type="submit">
            Sign up
          </button><br />
          <button className='acc__button2'><Link to="/login" style={{ textDecoration: "none" }}>Already have an account</Link></button><br />
        </div>

      </form>
    </div>
  )
}

export default CreateAccount