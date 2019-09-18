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
// import Paper from '@material-ui/core/Paper';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

			// <Paper style = {{padding: 5, marginTop: 20}}>


				<Grid 
					container
					direction = "column"
					// maxWidth="m" 
					style = {{marginTop: 20}}
					alignItems="center"
				 	justify="center"

				>	

					<ExpansionPanel>

				        <ExpansionPanelSummary
				          expandIcon={<ExpandMoreIcon />}
				          aria-controls="panel1a-content"
				          id="panel1a-header"
				        >

				          	<Typography variant="h6" component="h6">

				          		Send my anonymous opinion to developers

			          		</Typography>

				        </ExpansionPanelSummary>

				        <ExpansionPanelDetails>
				          
							<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeg95b4RWQID2_x91UAIb4kQRgg7p7qT-Oh46wS3oDkwXu15w/viewform?embedded=true" width="640" height="511" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

				        </ExpansionPanelDetails>

				      </ExpansionPanel>

				</Grid>

      	    // </Paper>

		);

	}

}