import React, { useRef, useContext } from 'react'
import UserContext from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import HeaderNoLog from '../components/HeaderNoLog';
import './LoginPage.css';

const LoginPage = () => {

  const [errorMessage, setErrorMessage] = useState(null)
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const inputUsername = useRef(null);
  const inputPass = useRef(null);

  // Login function
  const loginUser = async (params) => {
    setErrorMessage(null);
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    };

    try {
      const response = await fetch('http://localhost:4001/login', options);
      const data = await response.json();
      if (data.token) {
        // Context
        setUser(data);
        // LocalStarage
        localStorage.setItem('user', JSON.stringify(data));
        // Redirect
        navigate("/welcome");
      }else{
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  }

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      "email": inputUsername.current.value,
      "password": inputPass.current.value
    }
    loginUser(data);
  }

  return (
    <div>

    <HeaderNoLog/>
    <div className='form-container'>
      <div>
        <form  className='formcontainer' autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          <p><input className='labelform' type="text" name="username" ref={inputUsername} placeholder="email" /></p>
          <p><input className='labelform' type="password" name="password" ref={inputPass} placeholder="password" /></p>
          <input className='submitbutton' type="submit" value="Enviar" />
        </form>
        {errorMessage && <div className='error'>{errorMessage}</div>}
        
      </div>
    </div>
    </div>

  )
}

export default LoginPage