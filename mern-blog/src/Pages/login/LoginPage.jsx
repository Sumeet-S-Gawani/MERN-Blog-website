import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../content api/Context';
import './LoginPage.css';

const LoginPage = () => {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch , isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type:"LOGIN_START"});
    setError(false)
    try {
      const res = await axios.post("/auth/login", {
        username : userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    } catch (error) {
      setError(true);
      dispatch({type:"LOGIN_FAILED"});
      
    }
  }


  return (
    <div className='loginPage'>
      <span className="loginPageTitle">Login</span>
    <form action="#" className="loginPageForm" onSubmit={handleSubmit}>
      <label>Username</label>  
      <input className='loginPageInput' type="text" id="loginPageUsername" placeholder='Enter your username' ref={userRef}/>
      <label>Password</label>  
      <input className='loginPageInput' type="password" id="loginPagePassword" placeholder='Enter your password' ref={passwordRef}/>
      <button className="loginPageButton" type='submit' disabled={isFetching}>Login</button>
      {error && <span className='errorMsg'>Opps! username or password is wrong!</span>}
    </form>  
      <button className="loginPageRegisterButton"><Link className='link' to="/register">REGISTER</Link></button>
    </div>
  )
}

export default LoginPage;