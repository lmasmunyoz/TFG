import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './ShowArticles.css';


const endpoint = 'http://127.0.0.1:8000/api/furnitures';

const ShowArticles = () => {

    const [ articles, setArticles ] = useState([])

    useEffect ( ()=> {
        getAllArticles();
    }, [])

    const getAllArticles = async()=>{
        const response = await axios.get(`${endpoint}`)
        setArticles(response.data);
    }

    const deleteArticle = async(id)=>{
        await axios.delete(`${endpoint}/${id}`)
        getAllArticles()
    }

    return (
        <>
        <div className='body'>
            <div className='d-grid gap-2'>
                <Link to={`/create`} className='btn btn-secondary btn-lg mt-2 mb-2'>Crear</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nomrbe</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>ID Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map( (article)=>(
                            <tr key={article.id}>
                                <td>{article.name}</td>
                                <td>{article.description}</td>
                                <td>{article.price}</td>
                                <td>{article.img}</td>
                                <td>{article.category_id}</td>
                                <td>
                                    <Link to={`/edit/${article.id}`} className='btn btn-warning'>Editar</Link>
                                    <button onClick={ ()=>deleteArticle(article.id) } className='btn btn-danger'>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ShowArticles