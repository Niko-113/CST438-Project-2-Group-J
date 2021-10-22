import React from 'react'
import AdminNavbar from "../components/AdminNavbar";
import AddItem from "../AdminPages/AddItem";
import App from "../App"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function AdminHomepage() {
    return (
    <div className="Homepage">

      <Router>

        <Switch>
            <Route path="/" exact component={App}/>
            <div>
                <AdminNavbar />
                <Route path="/Admin/AddItem" exact component={AddItem} />
            </div>
        </Switch>
      </Router>
    </div>

    )
}

export default AdminHomepage;