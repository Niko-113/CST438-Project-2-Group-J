import React from 'react'
import { Link } from "react-router-dom"
import'../styles/Navbar.css'

function AdminNavbar() {
    return (
        <>
          <div className="navbar">
              <div className="leftSide">
              <h1 style={{color: "white"}}>Wishlist</h1>
              </div>

              <div className="rightSide">
                  <Link to="/AdminHomepage">Home</Link>
                  <Link to="/Admin/AddItem">Create Item</Link>
                  <Link to="/">Logout</Link>
                  
              </div>

          </div>

        </>
    )
}

export default AdminNavbar;