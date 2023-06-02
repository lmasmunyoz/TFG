import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryProduct from '../components/CategoryProduct'
import Header from '../components/Header';
import UserContext from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => { 

    const { idCategory } = useParams();
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
        <div>
                <Header/>

            <CategoryProduct id={idCategory}/>

        </div>

    )

}

export default CategoryPage

