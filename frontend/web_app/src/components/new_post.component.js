import React, { Component } from "react";
import {fs, st} from "../config/firebase";
import icons_users from "constants";

export default class New_Post extends Component{

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			post: "",
			photo: null,
			// comments: [],

		}

		this.on_change_post = this.on_change_post.bind(this);
		this.on_submit_post = this.on_submit_post.bind(this);

	}

	// upload file and then store post in DB
	on_submit_post(event){

		event.preventDefault();
		
		const selectedFile = document.getElementById('file_input').files[0];

		// Create a root reference
		var storageRef = st.ref('posts/' + selectedFile.name);

		// store file in firebase store
		storageRef.put(selectedFile).then(snapshot => {

			// get url of fiile
       		return snapshot.ref.getDownloadURL();

		})

		// if it's ok
		.then(downloadURL => {

			// console.log(`Successfully uploaded file and got download link - ${downloadURL}`);

			// add data to database
			fs.collection('posts').add({

				user_comment: this.state.post,
				comments: [],
				user_image: icons_users[parseInt(Math.random()*icons_users.length)],

				// add url of image
				image: downloadURL,				

			}).then( ref => {

				// console.log("Added document with ID: ", ref.id)

				// reload page
				window.location.reload();

			})
		})

		.catch(error => {

			// Use to signal error if something goes wrong.
			console.log(`Failed to upload file and get link - ${error}`);
		});

	}

	// if text on new post have changed
	on_change_post(event) {

		this.setState({

			post: event.target.value,

		})

	}

	render() {

		return (

			<div className = "container border shadow-sm my-3">

				<h4>

					Add new post
				</h4>

				<form onSubmit = {this.on_submit_post}>

	                <div className="form-group"> 

	                    <label> Post: </label>

	                    <textarea  type="text"
	                            className="form-control"
	                            value={this.state.post}
	                            onChange={this.on_change_post}
	                            />

	                </div>
	            	
	            	<div className="form-group"> 

	                    <label> Add photo: </label>

		            	<input 
		            		id = "file_input"
		            		type="file"
	        	       		name="agregar foto"
	        	       		className = "form-control p-1"
	            	       	accept="image/png, image/jpeg"
            	       	/>
	    	       	</div>

	                <div className="form-group ">

	                    <input type="submit" value="Post" className="btn btn-primary " />

	                </div>

	            </form>

	        </div>

			)

	}

}