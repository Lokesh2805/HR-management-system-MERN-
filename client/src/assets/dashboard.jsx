import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, Outlet } from "react-router-dom";

function Dashboard (){
    return(
        <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">Admin Dashboard</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li>
                        <Link to='/' data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2 text-light"></i> <span class="ms-1 d-none d-sm-inline text-light">Dashboard</span> </Link>
                        
                        </li>
                        <li class="nav-item">
                            <Link to='/employee' class="nav-link align-middle px-0">
                                <i class="fs-4 bi-people text-light"></i> <span class="ms-1 d-none d-sm-inline text-light">Manage employees</span>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to='/profile' class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-person-circle text-light"></i> <span class="ms-1 d-none d-sm-inline text-light">Profile</span></Link>
                        </li>
                        
                        
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-power text-light"></i> <span class="ms-1 d-none d-sm-inline text-light">Logout</span> </a>
                        </li>
                    </ul>
                    
                   
                </div>
            </div>
            <div class="col p-0 m-0">
            <div class="p-2 d-flex justify-content-center shadow ">
                <h4> Employee Management System </h4> 
                </div>
                <Outlet />
            </div>
        </div>
    </div>
    )

}

export default Dashboard;