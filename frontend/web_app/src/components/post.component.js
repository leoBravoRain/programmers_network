import React, { Component } from "react";
import {fs, st} from "../config/firebase";
import { icons_users } from "../constants";
import firebase from "firebase";
import "firebase/firestore";
import Comment_on_Post from "./comment_on_post.component";

// material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Post extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			comment_to_add: null,
			user_name_comment: null,
			// photo: null,
			// comments: [],

		}

		this.on_add_comment = this.on_add_comment.bind(this);

	}

	on_add_comment(document_id){

		// console.log(document_id);

		// console.log(this.state.comment_to_add);

		// console.log(icons_users);

		// check comment
		if(this.state.comment_to_add != null) {

			// check user name
			if(this.state.user_name_comment != null) {

				const comment = {

					user: this.state.user_name_comment,
					user_image: icons_users[parseInt(Math.random()*icons_users.length)],
					user_comment: this.state.comment_to_add,

				}

				// console.log(comment);

				// add data to database
				fs.collection('posts').doc(document_id).update({

					// user_comment: this.state.post,
					comments: firebase.firestore.FieldValue.arrayUnion(comment),
					// user_image: icons_users[parseInt(Math.random()*icons_users.length)],

				}).then( ref => {

					console.log("Added document")
					window.location.reload();
				})

			}

			// if user name is null
			else {

				alert("Ups, It's like you did not add your name in the comment, please add one!")

			}

		}

		else {

			alert("Ups, It's like you did not add a comment, please add one!")

		}

	}

	render() {

		const post = this.props.post;

		// const document_id = -1;

		// console.log(post);

		return (

			<Card style = {{marginTop: 50}}>

				<CardContent>

					<Container>

						<Grid container spacing={3}>

							<Grid item xs={1}>

								<img width="30" height="30" src = {post.user_image} alt="user image"/>

							</Grid>

							<Grid item xs={11}>

								<Typography gutterBottom variant="h5" component="h2">

									{post.user}

								</Typography>

							</Grid>

						</Grid>

						<Typography variant="body2" color="textSecondary" component="p" style = {{padding: 10}}>

							{post.user_comment}

						</Typography>

					</Container>

					<CardMedia
						element= "container"
			          // className={classes.media}
			          image = {post.image}
			          style = {{
			          	height: "500px",
			          	// maxHeight:"50%", 
			          	// maxWidth: "50%", 
			          	margin: 15
			          }}
			          title= {post.user}
			        />

					<Container>

						{post.comments.length > 0 && post.comments.map( (comment, idx) => {

							return(

								<Comment_on_Post comment = {comment} key = {idx}/>

								)

						})}

						<Container className = "container form-group m-3">

							<TextField 
								placeholder = "Add comment" 
								fullWidth
								style={{ margin: 8 }}
								variant="outlined"
								margin = 'normal'
								// className = "form-control" 
								onChange = {
									(comment_to_add) => {

										this.setState({comment_to_add: comment_to_add.target.value})

									}
								}
								value = {this.state.comment_to_add}
							/>

							<TextField 
								placeholder = "Your name" 
								fullWidth
								style={{ margin: 8 }}
								variant="outlined"
								margin = 'normal'
								// className = "form-control" 
								onChange = {
									(user_name_comment) => {

										this.setState({user_name_comment: user_name_comment.target.value})

									}
								}
								value = {this.state.user_name_comment}
							/>

							<Button variant="contained" color="primary" onClick={() => this.on_add_comment(post.doc_id)}>

								Add comment 

							</Button>

						</Container>

					</Container>

				</CardContent>

	    	</Card>

    	)

	}

}