
import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
