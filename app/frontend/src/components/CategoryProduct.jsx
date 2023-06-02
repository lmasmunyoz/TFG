import React  from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FurnitureService from './../services/FurnitureService'
import './GridProductPage.css'


const CategoryProduct = ({id}) => {
  
  
    const [furnitures, setFurnitures] = useState([]);
    const [filteredFurnitures, setFilteredFurnitures] = useState([]);
    const [filter, setFilter] = useState("");

    const handleChange=e=>{
        setFilter(e.target.value);
        filter_name(e.target.value);
    }

    const filter_name=(e)=>{
        const searchResult=furnitures.filter((i)=>{
            if(i.name.toLowerCase().includes(e.toLowerCase())){
                return i;
            }
        })
        setFilteredFurnitures(searchResult);
    }

    useEffect(  
        () => {
            FurnitureService.getFurnitureByCategoryId(id).then(data => setFurnitures(data));
            FurnitureService.getFurnitureByCategoryId(id).then(data => setFilteredFurnitures(data));
        }, []
    )


    return (
        <div className="mainpage">
             <div className='containerInput'>
                    <h2 className='categoryname'>{}</h2>
                        <input className='form-control inputBuscar' value={filter} placeholder="Buscar" onChange={handleChange} />
                    </div>


            <section className='product-grid'>
                {
                    filteredFurnitures.map(
                        e => <article className='card' key={e.id}>
                            <img className="card-img" src={`../assets/${e.category_id}/${e.img}`} alt=""></img>
                            <div className="card-content">
                                <Link to={"/furniture/" + e.id} style={{ textDecoration: 'none' }}><h3 className='h5'>{e.name}</h3></Link>
                                <p>{e.description}</p>
                                <p>{e.price}€</p>
                                <button> Añadir a la cesta</button>
                            </div>
                        </article>
                    )

                }
            </section>

        </div>

    )
}

export default CategoryProduct