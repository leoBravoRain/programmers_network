import React, { Component } from "react";
// import { BrowserRouter as Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom'
// import {fs, st} from "../config/firebase";
// import icons_users from "constants";

// material ui
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import { spacing } from '@material-ui/system';
// import Icon from '@material-ui/core/Icon';

export default class Login extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			// comment_to_add: "",
			// photo: null,
			// comments: [],

		}

		this.handle_login = this.handle_login.bind(this);

	}

	handle_login() {

		// redirect to home
		this.props.history.push('/home');

	}

	render() {

		return (

			<Grid 
				container
				// maxWidth="m" 
				style = {{margin: 20, textAlign: 'center'}}
				alignItems="center"
			 	justify="center"


			>

				<Typography gutterBottom variant="h5" component="h2">

					Welcome to the programmer's social network!

				</Typography>

				<Grid 
					container
					alignItems="center"
				 	justify="center"
				 	// spacing={100}
				>

					<img 
						src = {require("../statics/images/logo.png")}
						height = "150"
						width = "auto"
						// align="middle"
						style = {{
							align: "right",
							// borderRadius: 1000,
						}}
					/>

				</Grid>

				<Typography variant="body2" color="textSecondary" component="p" style = {{padding: 10}}>

					Here you can share all your achievements, doubts or ideas with all the community of programmers, getting the best feedback from them! Happy coding!

				</Typography>

				<Grid
					container
					// container
					alignItems="center"
				 	justify="center"
				>

				<Button variant="contained" color="primary" onClick={this.handle_login}>

			        I am a programmer

		      	</Button>

		      	</Grid>

			</Grid>

		);

	}

}