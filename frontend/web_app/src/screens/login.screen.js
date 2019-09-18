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
				style = {{marginTop: 30, textAlign: 'center'}}
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
				 	direction = "column"
				>

					<Typography variant="body2" color="textSecondary" component="p" style = {{padding: 10}}>

						Here you can share your daily life things related with programming,
						like your ideas or your achievements, and getting feedback from community !

					</Typography>

					<Typography variant="body2" color="textSecondary" component="p" style = {{padding: 10}}>

						It's like an Instagram but for programmers! 

					</Typography>

			      	<Typography variant="body2" color="textSecondary" component="p" style = {{padding: 10}}>

						Feel free to be geek!

					</Typography>

				</Grid>

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

				

				<Grid
					container
					direction = "column"
					alignItems="center"
				 	justify="center"
				>

				<Button variant="contained" color="primary" onClick={this.handle_login}>

			        I am a programmer

		      	</Button>

      			<Button size = "small" variant="contained" color="secondary" onClick={()=> window.open("https://forms.gle/8iKf572YwAgsm6Pq6")}>

      		        Send my opinion to developers

      	      	</Button>


		      	</Grid>


			</Grid>

		);

	}

}