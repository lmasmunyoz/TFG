import React from 'react';
import ShowArticles from '../components/ShowArticles';
import Header from '../components/Header';

const Crud = () => {
  return (
    <>
    <Header/>
     <ShowArticles/>
    <button className='btn btn-primary'>Crear</button>
    </>
  )
}

export default Crud