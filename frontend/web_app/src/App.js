import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/home.component";
// import Piece_of_Ground_Map from "./components/piece_of_ground_map.component";
// import Contact from './components/contact.component';
// import Questions_Answers from './components/questions_answers.component';

// Component 
class App extends Component {

  // render method
  render() {

    return (

      <Router>

        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link to="/" className="navbar-brand"> 

              Programmers Social Network

            </Link>

            <div className="collpase navbar-collapse">

              <ul className="navbar-nav mr-auto">

                <li className="navbar-item">

                  <Link to="/" className="nav-link">

                    Home

                  </Link>

                </li>

              </ul>

            </div>

          </nav>

        </div>

        <Route path = "/" exact component = {Home} />

      </Router>

    );

  }

}

// exporting app
export default App;