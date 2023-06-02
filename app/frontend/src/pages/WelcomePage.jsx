import React, { useContext, useEffect, useState } from 'react'
import UserContext from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";
import GridProductPage from '../components/GridProductPage'
import Header from '../components/Header';

const WelcomePage = () => {

  const { user } = useContext(UserContext);
  const [welcomeInfo, setWelcomeInfo] = useState(null)
  const navigate = useNavigate();

  const getWelcomeInfo = async (token) => {
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token
      },
    };
    console.log(options);

    try {
      const response = await fetch('http://127.0.0.1:4001/welcome', options);
      const data = await response.json();
      setWelcomeInfo(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!user.name) {
      navigate("/error/1");
    } else {
      getWelcomeInfo(user.token);
    }
  }, []);

  return (
    <>
    <Header/>
      <GridProductPage/>
    </>

  )
}

export default WelcomePage