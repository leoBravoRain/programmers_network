import React, { Component } from "react";
// import {fs, st} from "../config/firebase";
// import icons_users from "constants";

// material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

export default class Comment_on_Post extends Component {

	render() {

		const comment = this.props.comment;

		return (

			<Container style = {{margin: 10}}>

				<Grid container spacing={3}>

					<Grid item xs={1}>

						<img width="30" height="30" src = {comment.user_image} alt="user image"/>

					</Grid>

					<Grid item xs={11}>

						<Typography gutterBottom variant="h6" component="h6">

							{comment.user}

						</Typography>

					</Grid>

				</Grid>

				<Typography variant="body2" color="textSecondary" component="p" style = {{padding: 10, fontSize: 14}}>

					{comment.user_comment}

				</Typography>

				<Divider variant="middle" />

			</Container>

		);

	}

}