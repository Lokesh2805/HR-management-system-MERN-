import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Addemployee() {
    const[data, setData] = useState({
        name:'',
        email:'',
        password:'',
        salary:'',
        address:'',
        image:''
    })

	const navigate = useNavigate();

    const handlesubmit = (event) =>{
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("password", data.password);
        formdata.append("salary", data.salary);
        formdata.append("address", data.address);
        formdata.append("image", data.image);


        axios.post('http://localhost:8080/create', formdata)
        .then(res=>{
			navigate('/employee')
		})
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex flex-column align-items-center pt-4'>
			<h2>Add Employee</h2>
			<form class="row g-3 w-50" onSubmit={handlesubmit}>
			
			<div class="col-12">
					<label for="inputName" class="form-label">Name</label>
					<input type="text" class="form-control" id="inputName" name='name' placeholder='Enter Name' autoComplete='off'
					onChange={e => setData({...data,name: e.target.value})}/>
				</div>
				<div class="col-12">
					<label for="inputEmail4" class="form-label">Email</label>
					<input type="email" class="form-control" id="inputEmail4" name='email' placeholder='Enter Email' autoComplete='off'
					onChange={e => setData({...data,email:e.target.value})}/>
				</div>
				<div class="col-12">
					<label for="inputPassword4" class="form-label">Password</label>
					<input type="password" class="form-control" id="inputPassword4" name='password' placeholder='Enter Password'
					onChange={e => setData({...data,password: e.target.value})} />
				</div>
				<div class="col-12">
					<label for="inputSalary" class="form-label">Salary</label>
					<input type="text" class="form-control" id="inputSalary" name='salary' placeholder="Enter Salary" autoComplete='off'
					onChange={e => setData({...data,salary: e.target.value})}/>
				</div>
				<div class="col-12">
					<label for="inputAddress" class="form-label">Address</label>
					<input type="text" class="form-control" id="inputAddress" name='address' placeholder="Enter Address" autoComplete='off'
					onChange={e => setData({...data,address: e.target.value})}/>
				</div>
				<div class="col-12">
					<label for="inputCategory" class="form-label">Category</label>
					<input type="text" class="form-control" id="inputCategory" name='category' placeholder="Enter Category" autoComplete='off'
					onChange={e => setData({...data,category: e.target.value})}/>
				</div>
				<div class="col-12 mb-3">
					<label class="form-label" for="inputGroupFile01">Select Image</label>
					<input type="file" class="form-control" id="inputGroupFile01" name='filename'
					onChange={e => setData({...data,image: e.target.files[0]})}/>
				</div>
				<div class="col-12">
					<button type="submit" class="btn btn-primary">Create</button>
				</div>
			</form>
		</div>
  )
}

export default Addemployee
