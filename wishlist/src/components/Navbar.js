import React, {useState} from 'react'
import { Link } from "react-router-dom"
import'../styles/Navbar.css'

function Navbar() {
    return (
        <>
          <div className="navbar">
              <div className="leftSide">
              <h1 style={{color: "white"}}>Wishlist</h1>
              </div>

              <div className="rightSide">
                  <Link to="/">Home</Link>
                  
                  <Link to="/Items">Browse</Link>
                  <Link to="/Login">Login</Link>
                  <Link to="/Register">Register</Link>
                  <Link to="/About">About</Link>
                  <Link to="/Contact">Contact</Link>
              </div>

          </div>

        </>
    )
}

export default Navbar;
