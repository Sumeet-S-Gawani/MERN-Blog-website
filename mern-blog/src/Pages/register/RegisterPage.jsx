import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError(false);
      try {
        const res = await axios.post("/auth/register", {
          username,
          email,
          password
        })
        console.log(res)
        res.data && window.location.replace("/login");

      } catch (error) {
        // const {response : {data}} = error;
        // alert("Sorry!" + data);
        setError(true);
      }
      
      
  }

  return (
    <div className='registerPage'>
      <span className="registerPageTitle">Register</span>
    <form action="#" className="registerPageForm" onSubmit={handleSubmit}>
      <label>Username</label>  
      <input className='registerPageInput' type="text" id="registerPageUsername" placeholder='Enter your username' onChange={e=> setUsername(e.target.value)} autoComplete="off" autoFocus autoCapitalize='on'/>
      <label>Email</label>  
      <input className='registerPageInput' type="email" id="registerPageEmail" placeholder='Enter your email'  onChange={e=> setEmail(e.target.value)} autoComplete="off"/>
      <label>Password</label>  
      <input className='registerPageInput' type="password" id="registerPagePassword" placeholder='Enter your password' onChange={e=> setPassword(e.target.value)} autoComplete="off"/>
      <button className="registerPageButton" type='submit'>Register</button>
    </form>  
      <button className="registerPageLoginButton"><Link className='link' to="/login">LOGIN</Link></button>
      {error && <span className='errorMsg'>Opps! username or email already exists!</span>}
    </div>
  )
}

export default RegisterPage;