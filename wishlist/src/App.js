import "./App.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Homepage from "./Pages/Homepage";
import AdminLogin from "./AdminPages/AdminLogin";

//Landing page. User required to register and login to get access to Homepage
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Homepage" exact component={Homepage} />
          <Route path="/AdminLogin" exact component={AdminLogin} />
        </Switch>
      </Router>
    </div>

    
  );
}

export default App;