import React, { Component } from "react";
// import { BrowserRouter as Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom'
// import {fs, st} from "../config/firebase";
// import survey_link from "../constants";

// material ui
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import { spacing } from '@material-ui/system';
// import Icon from '@material-ui/core/Icon';

export default class Login extends Component {

	// // constructor
	// constructor(props) {

	// 	// constructur of parent
	// 	super(props);

	// 	// initial states
	// 	this.state = {

	// 		// comment_to_add: "",
	// 		// photo: null,
	// 		// comments: [],

	// 	}

	// 	this.handle_login = this.handle_login.bind(this);

	// }

	// handle_login() {

	// 	// redirect to home
	// 	this.props.history.push('/home');

	// }

	render() {

		return (

			<Paper style = {{padding: 5, marginTop: 20}}>


				<Grid 
					container
					direction = "column"
					// maxWidth="m" 
					// style = {{marginTop: 0}}
					alignItems="center"
				 	justify="center"

				>	
						<Typography gutterBottom variant="h6" component="h6">

							We would love to know your opinion about this project!

						</Typography>

		      			<Button size = "small" variant="contained" color="secondary" onClick={()=> window.open("https://forms.gle/8iKf572YwAgsm6Pq6")}>

		      		        Send my anonymous opinion to developers

		      	      	</Button>

				</Grid>

      	    </Paper>

		);

	}

}