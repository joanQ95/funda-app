import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark shadow justify-content-center">
        

            <Link to="/" className="navbar-brand d-flex w-50 mr-auto">A Web Page</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className="navbar-nav w-100 justify-content-end">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link active">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link active">Contact us</Link>
                    </li>
                </ul>
            </div>
            
        
    </nav>
    
  )
}

export default Navbar
