import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./screens/home.screen";
import Login from "./screens/login.screen";

// Material ui
// import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './material-ui/theme';

// import Piece_of_Ground_Map from "./components/piece_of_ground_map.component";
// import Contact from './components/contact.component';
// import Questions_Answers from './components/questions_answers.component';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// Component 
class App extends Component {


  // render method
  render() {

    return (

      <MuiThemeProvider theme={theme}>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        <Router>

          <AppBar position="static">

            <Toolbar>

              <Typography gutterBottom variant="h4" component="h2">

                Programmers Social Network

              </Typography>

            </Toolbar>

          </AppBar>

          <Route path = "/" exact component = {Login} />
          <Route path = "/home" exact component = {Home} />

        </Router>

      </MuiThemeProvider>

    );

  }

}

// exporting app
export default App;