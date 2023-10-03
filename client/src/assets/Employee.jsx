import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Employee() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/getEmployee')
    .then(res=>{
      if(res.data.status === "success"){
        setData(res.data.result);
      }else{

        alert("error")
      }
      
    })
    .catch(err=> console.log(err));
  }, [])
  return (
    <div className='px-5 py-3'>
        <div className='d-flex justify-content-center'>
            <h3>Employee List</h3>
        </div>
        <Link to="/create" className='btn btn-success'>Add Employee</Link>
       <div className='mt-3'>
        <table className='table'>
          <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Address</th>
            <th>Action</th>


          </tr>
          </thead>
          <tbody>
          {data.map((employee, index) =>{
            return <tr key={index}>
            <td>{employee.name}</td>
            <td>
              {<img src={`http://localhost:8080/images/`+ employee.imageFilename} alt='employeeimg' className='employee_image'/>}
            </td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.salary}</td>
            <td>
              <Link to={`/EmployeeEdit/`+employee._id} className='btn btn-sm btn-primary me-2'>Edit</Link>
              <button className='btn btn-sm btn-danger'>Delete</button>
            </td>

            </tr>
          })}
          </tbody>
        </table>
        </div> 
    </div>
  )
}

export default Employee