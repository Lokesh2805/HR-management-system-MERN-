import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddCategory() {
    const navigate = useNavigate();
    const [category, setCategory] = useState();
    const handleSubmit = async(e) =>{
        e.preventDefault()
        await axios.post('http://localhost:8080/add_category', {category})
        .then(result =>{ 
            if(result.data.Status)  {
                navigate('/category');  
            }else{
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25 border'>
        <h1>Add Category</h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
            <label htmlFor='category'><strong>Category:</strong></label>
            <input type='text' placeholder='Enter Category' name='category' onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0' />
            </div>
           
            <button type='submit' className='btn btn-success w-100 rounded-0'>Add Category</button>
            
        </form>
        </div>
    </div>
  )
}

export default AddCategory