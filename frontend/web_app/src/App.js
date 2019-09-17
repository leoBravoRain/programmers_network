import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./screens/home.screen";
import Login from "./screens/login.screen";

import CssBaseline from '@material-ui/core/CssBaseline';
// import Piece_of_Ground_Map from "./components/piece_of_ground_map.component";
// import Contact from './components/contact.component';
// import Questions_Answers from './components/questions_answers.component';

// Component 
class App extends Component {

  // render method
  render() {

    return (

      <React.Fragment>

        <CssBaseline />

        <Router>

          <div className="container">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

              <Link to="/" className="navbar-brand"> 

                Programmers Social Network

              </Link>

              <div className="collpase navbar-collapse">

                <ul className="navbar-nav mr-auto">

                  <li className="navbar-item">

                  
                  </li>

                </ul>

              </div>

            </nav>

          </div>

          <Route path = "/" exact component = {Login} />
          <Route path = "/home" exact component = {Home} />

        </Router>

      </React.Fragment>

    );

  }

}

// exporting app
export default App;