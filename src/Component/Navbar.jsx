import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(){

    return(


        <>
                <nav className="navbar navbar-expand-lg bg-light p-3">
                    <div className="container-fluid text-dark">
                        
                        <NavLink to='/' className="navbar-brand mx-5 text-danger fw-bold" style={{fontSize:'35px'}} href="#">Centeral</NavLink>
                            
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        
                        <div className="collapse navbar-collapse" id="navbarNav">
                        
                        <ul className="navbar-nav fw-bold m-auto">
                        
                            <li className="nav-item mx-4">
                                <NavLink to='/' className="nav-link active" aria-current="page" href="">Home</NavLink>
                            </li>
                            
                            <li className="nav-item mx-4">
                                <NavLink to='/about' className="nav-link" href="#">About</NavLink>
                            </li>
        
                            <li className="nav-item mx-4">
                                <NavLink to='service' className="nav-link" href="#">Service</NavLink>
                            </li>
        
                            <li className="nav-item mx-4">
                                <NavLink to='contact' className="nav-link">Contact</NavLink>
                            </li>

                            <button className="btn btn-danger rounded " style={{marginLeft:'330px'}}>Get Started</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}