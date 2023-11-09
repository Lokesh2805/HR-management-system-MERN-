import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

function EmployeeEdit() {
    const[data, setData] = useState({
        name:'',
        email:'',
        salary:'',
        address:''    })

	const navigate = useNavigate();
    const _id= useParams();
    console.log(_id);

    useEffect(()=>{
        axios.get('http://localhost:8080/get/'+{_id})
        .then(res=>{
            setData({...data, name: res.data.Result.name,
            email: res.data.Result.email,
            salary: res.data.Result.salary,
            address: res.data.Result.address})
			
        })
        .catch(err=> console.log(err));
    },[])

    const handlesubmit = (event) =>{
        event.preventDefault();


        axios.put('http://localhost:8080/update/'+{_id}, data)
        .then(res=>{
            
			navigate('/employee')
		})
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex flex-column align-items-center pt-4'>
			<h2>Update Employee</h2>
			<form class="row g-3 w-50" onSubmit={handlesubmit}>
			<div class="col-12">
					<label for="inputName" class="form-label">Name</label>
					<input type="text" class="form-control" id="inputName" name='name' placeholder='Enter Name' autoComplete='off'
					onChange={e => setData({...data,name: e.target.value})} value={data.name}/>
				</div>
				<div class="col-12">
					<label for="inputEmail4" class="form-label">Email</label>
					<input type="email" class="form-control" id="inputEmail4" name='email' placeholder='Enter Email' autoComplete='off'
					onChange={e => setData({...data,email:e.target.value})} value={data.email}/>
				</div>
				
				<div class="col-12">
					<label for="inputSalary" class="form-label">Salary</label>
					<input type="text" class="form-control" id="inputSalary" name='salary' placeholder="Enter Salary" autoComplete='off'
					onChange={e => setData({...data,salary: e.target.value})} value={data.salary}/>
				</div>
				<div class="col-12">
					<label for="inputAddress" class="form-label">Address</label>
					<input type="text" class="form-control" id="inputAddress" name='address' placeholder="Enter Address" autoComplete='off'
					onChange={e => setData({...data,address: e.target.value})} value={data.address}/>
				</div>
				
				<div class="col-12">
					<button type="submit" class="btn btn-primary">Update</button>
				</div>
			</form>
		</div>
  )
}


export default EmployeeEdit;