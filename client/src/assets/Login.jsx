import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const[values, setValues] = useState({
        email: '',
        password: ''
    });
    const[error, setError] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async(event) =>{
        event.preventDefault();
        await axios.post('http://localhost:8080/login', values)
        .then(res => {console.log(res)
            if(res.data.status === "success"){
        navigate('/')}
    else{
        setError(res.data.Error);
    }})
        .catch(err => console.log(err));
    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='bg-white p-3 rounded w-25 border loginForm'>
        <div className='text-danger'>
        {error && error}
        </div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email' name='email' onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-0' />
            </div>
            <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' placeholder='Enter Password' name='password' onChange={e => setValues({...values, password: e.target.value})} className='form-control rounded-0' />
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
            <div className='d-flex'>
            <input type='checkbox' />
            <p style={{paddingTop: '12px'}}>You are agree with our Terms and Policies</p>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login;