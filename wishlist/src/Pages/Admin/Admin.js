import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/Admin.css";

function Admin() {
    return (
        <div>
            Admin Page
            <br></br>
            <Link to="Admin/AddItem">Add Item to Catalog</Link>

        </div>
    )
}
export default Admin;