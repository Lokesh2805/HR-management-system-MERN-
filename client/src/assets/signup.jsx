import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';
import Login from './Login';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const [firstname, setfirstName] = useState();
    const [lastname, setlastName] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState(); 
    const navigate = useNavigate();
  


    
const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({firstname, lastname, email, password});
 
    try {
        const response = await axios.post('http://localhost:8080/register', {
            firstname,
            lastname,
            email,
            password
        });
        console.log(response.data);
        navigate('/login');
    } catch (error) {
        console.error(error);
    }
};

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='bg-white p-3 rounded w-25 border loginForm'>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit} >
            <div className='mb-3'>
            <label htmlFor='text'><strong>First Name</strong></label>
            <input type='text' placeholder='Enter first name' name='firstname' className='form-control rounded-0' onChange={(e)=> setfirstName(e.target.value)} />
            </div>
            <div className='mb-3'>
            <label htmlFor='text'><strong>Last Name</strong></label>
            <input type='text' placeholder='Enter Last Name' name='lastname'  className='form-control rounded-0' onChange={(e)=> setlastName(e.target.value)} />
            </div>
            <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email' name='email'  className='form-control rounded-0' onChange={(e)=> setemail(e.target.value)}/>
            </div>
            <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' onChange={(e)=> setpassword(e.target.value)}/>
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'>Signup</button>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <p style={{ paddingLeft: '45%', paddingTop: '12px'}}>OR</p>
            </div>
            </form>
            <Link to='/login' type='submit' className='btn btn-success w-100 rounded-0'>already a member? Login</Link>

        
        </div>
    </div>
  )
}

export default Signup;