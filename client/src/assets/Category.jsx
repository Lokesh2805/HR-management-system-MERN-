import React from 'react'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='px-5 mt-5 '>
        <div className='d-flex justify-content-center'>
        <h3>Category List</h3>
        </div>
        <Link to='/add_category' className='btn btn-success'>Add Category</Link>
        <table>
          <thead>
            <tr>
                <th>Name</th>
            </tr>
          </thead>
        </table>
    </div>
  )
}

export default Category