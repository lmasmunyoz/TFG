import React, { useContext, useEffect } from 'react'
import UserContext from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";
import ProductPage from '../components/ProductPage'
import '../components/ProductPage.css'
import Header from '../components/Header';


const DetailPage = () => {

  const { user } = useContext(UserContext);
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
  }

  useEffect(() => {
    if (!user.name) {
      navigate("/error/1");
    } else {
      getWelcomeInfo(user.token);
    }
  }, []);

  return (
    <div className='porductpage'>
          <Header/>

      <ProductPage/>
    </div>

  )
}

export default DetailPage