import React from 'react'
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
                  <Link to="/Search">Search</Link>
                  <Link to="/EditProfile">Edit Profile</Link>
                  <Link to="/UpdateItem">Update Item</Link>
                  <Link to="/About">About</Link>
                  <Link to="/Contact">Contact</Link>
                  
              </div>

          </div>

        </>
    )
}

export default Navbar;