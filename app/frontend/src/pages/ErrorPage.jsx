import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';


const ErrorPage = () => {
    const { code } = useParams();
    let message = "no-permission"
    if (code==="1") message="restricted access" 

        return (
            <div className='error'>
                    <Header/>

                Error:{message}
            </div>
        )
}

export default ErrorPage