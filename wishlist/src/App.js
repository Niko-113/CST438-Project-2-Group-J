
import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Search from "./Pages/Search";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin/Admin";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Search" exact component={Search} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Admin" exact component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
