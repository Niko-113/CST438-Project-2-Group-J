import "./App.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Homepage from "./Pages/Homepage";
import AdminLogin from "./AdminPages/AdminLogin";
import AdminHomepage from "./AdminPages/AdminHomepage";

//Landing page. User required to register and login to get access to Homepage
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} /> 
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Homepage" exact component={Homepage} />
          <Route path="/AdminLogin" exact component={AdminLogin} />
          <Route path="/AdminHomepage" exact component={AdminHomepage} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;