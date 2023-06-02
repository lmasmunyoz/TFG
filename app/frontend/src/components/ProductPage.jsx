import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductPage.css'

const ProductPage = () => {

    const navigate = useNavigate();
    const { idFurniture } = useParams();
    const [furniture, setFurnitures] = useState(null);

    const getFurnitureById = async (idFurniture) => {
        try {
            const response = await fetch(`http://localhost:8000/api/furnitures/`);
            const data = await response.json();
            const dataFurniture = data.find(e => e.id == idFurniture)
            setFurnitures(dataFurniture);
            console.log(dataFurniture)
        } catch (error) {
            console.log("Error en la carga de datos");
            console.log(error);
        }
    }


    useEffect(() => {
        getFurnitureById(idFurniture)
    }, []);

    return (
        <main >

            {
                furniture &&
                <div className='maindetail'>
                    <div className='card-contend'>
                    <img className="card-imgs" src={`../assets/${furniture.category_id}/${furniture.img}`} alt=""></img>
                    <div className='detailss'>
                    <h3>{furniture.category_id?.name}</h3>
                    <p  className='h4'>{furniture.name}</p>
                    <p className='descriptiooon'>{furniture.description}</p>
                    <button> Añadir a la cesta</button>
                    </div>
                    </div>
                    
                </div>
            }
                    <button className='atras' onClick={() => navigate(-1)}>Atras</button>

        </main>
    )
}

export default ProductPage
