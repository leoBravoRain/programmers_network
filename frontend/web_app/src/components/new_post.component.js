import React, { Component } from "react";
import {fs, st} from "../config/firebase";
import {icons_users} from "../constants";

// mateiral ui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class New_Post extends Component{

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			post: null,
			photo: null,
			user_name: null,
			loading: false,
			// comments: [],

		}

		console.log(this.props);

		this.on_change_post = this.on_change_post.bind(this);
		this.on_submit_post = this.on_submit_post.bind(this);
		this.on_change_user_name = this.on_change_user_name.bind(this);

	}

	// upload file and then store post in DB
	on_submit_post(event){

		event.preventDefault();

		const selectedFile = document.getElementById('file_input').files[0];

		// console.log(this.state.user_name);

		// validate if there is a post
		if(this.state.post != null) {

			// if user name 
			if(this.state.user_name != null){

				// if file is not null
				if(selectedFile) {

					// set flag loading to true
					this.setState({loading: true});

					// Create a root reference
					var storageRef = st.ref('posts/' + selectedFile.name);

					// store file in firebase store
					storageRef.put(selectedFile).then(snapshot => {

						// get url of fiile
			       		return snapshot.ref.getDownloadURL();

					})

					// if it's ok
					.then(downloadURL => {

						console.log(`Successfully uploaded file and got download link - ${downloadURL}`);

						// add data to database
						fs.collection('posts').add({

							user: this.state.user_name,
							user_comment: this.state.post,
							comments: [],
							user_image: icons_users[parseInt(Math.random()*icons_users.length)],

							// add url of image
							image: downloadURL,				

						}).then( ref => {

							console.log("Added document with ID: ", ref.id)

							// reload page
							// window.location.reload();

							// console.log(this);

							// this.context.router.history.push(`/home`)
							console.log(window.location.host);
							window.location.reload();
							// window.location.assign(window.location.host);

							// return(

							// 	<Link to = "/"/>

							// );

						})

					})

					.catch(error => {

						// Use to signal error if something goes wrong.
						console.log(`Failed to upload file and get link - ${error}`);

					});

				}

				else {

					alert("Ups, It's like you did not add an image in the post, please, add one!")

				}

			}

			// if not user name
			else {

				alert("Ups, It's like you did not write your name in the post, please, write something!")

			}

		}

		// if post is empty
		else {

			alert("Ups, It's like you did not write anything in the post, please, write something!")

		}

	}

	// if text on new post have changed
	on_change_post(event) {

		this.setState({

			post: event.target.value,

		})

	}

	// if text on new post have changed
	on_change_user_name(event) {

		this.setState({

			user_name: event.target.value,

		})

	}

	render() {

		return (

			<Container maxWidth = "xl" style={{position: 'relative'}}>

				{this.state.loading 

					?
						<CircularProgress size = {80} style = {{margin: 30, marginLeft: "50%"}}/>
					:

						<Paper style = {{padding: 20, margin: 30}}>

							<Typography gutterBottom variant="h5" component="h2">

								Add new post

							</Typography>

							<form onSubmit = {this.on_submit_post}>

								<TextField 
									placeholder = "What are you coding?" 
									fullWidth
									multiline
									rowsMax = "4"
									label = "Post here"
									style={{ margin: 8 }}
									variant="outlined"
									margin = 'normal'
									onChange = {this.on_change_post}
									value = {this.state.post}
								/>

								<TextField 
									placeholder = "What's your name?" 
									fullWidth
									label = "Your name"
									style={{ margin: 8 }}
									variant="outlined"
									margin = 'normal'
									onChange = {this.on_change_user_name}
									value = {this.state.user_name}
								/>

				            	<Container> 

				            		<Typography variant="caption" component="p">

				            			Add photo

				            		</Typography>

					            	<input 
					            		style = {{margin: 10}}
					            		id = "file_input"
					            		type="file"
				        	       		name="agregar foto"
				        	       		className = "form-control p-1"
				            	       	accept="image/png, image/jpeg"
			            	       	/>

				    	       	</Container>

			    	       		<Button variant="contained" color="primary" type = "submit">

			    	       			Post

			    	       		</Button>

				            </form>

				        </Paper>
				}

	        </Container>

			)

	}

}