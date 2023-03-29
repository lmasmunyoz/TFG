import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api/furnitures';

const CreateArticle = () => {

    const [ name , setName ] = useState('');
    const [ description , setDescription ] = useState('');
    const [ price , setPrice ] = useState(0);
    const [ img , setImg ] = useState('');
    const [ category_id , setCategory_id ] = useState(0);
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {name: name, description: description, price: price, img: img, category_id: category_id})
        navigate('/crud')
    }

  return (
    <div>
        <h3>Crear Articulo</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input type='text' value={name} onChange={ (e)=> setName(e.target.value) } className='form-control'/>
            </div>

            <div className='form-label'>
                <label className='form-label'>Descripcion</label>
                <input type='text' value={description} onChange={ (e)=> setDescription(e.target.value) } className='form-control'/>
            </div>
            <div className='form-label'>
                <label className='form-label'>Precio</label>
                <input type='number' value={price} onChange={ (e)=> setPrice(e.target.value) } className='form-control'/>
            </div>
            <div className='form-label'>
                <label className='form-label'>Imagen</label>
                <input type='text' value={img} onChange={ (e)=> setImg(e.target.value) } className='form-control'/>
            </div>
            <div className='form-label'>
                <label className='form-label'>ID Categoria</label>
                <input type='number' value={category_id} onChange={ (e)=> setCategory_id(e.target.value) } className='form-control'/>
            </div> 
            <button type='sumbit' className='btn btn-primary'>Guradar</button>
        </form>
    </div>
  )
}

export default CreateArticle