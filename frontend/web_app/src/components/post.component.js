import React, { Component } from "react";
import {fs, st} from "../config/firebase";
import icons_users from "constants";
import firebase from "firebase";
import "firebase/firestore";
import Comment_on_Post from "./comment_on_post.component";

export default class Post extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			comment_to_add: "",
			// photo: null,
			// comments: [],

		}

		this.on_add_comment = this.on_add_comment.bind(this);

	}

	on_add_comment(document_id){

		// console.log(document_id);

		// update({
		//   regions: admin.firestore.FieldValue.arrayUnion('greater_virginia')
		// });

		// console.log(this.state.comment_to_add);

		const comment = {

			user_image: icons_users[parseInt(Math.random()*icons_users.length)],
			user_comment: this.state.comment_to_add,

		}

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

	render() {

		const post = this.props.post;

		// const document_id = -1;

		// console.log(post);

		return (

			<div className = "container border rounded shadow-sm my-3 p-4">

				<div className="media">

					<img width="30" height="30" src = {post.user_image}  className="mr-3" alt="user image"/>

					<div className="media-body">

						<h5 className ="mt-0">{post.user}</h5>

						{post.user_comment}

					</div>

				</div>

				<p>

					<img 
						src = {post.image} 
						width="500" 
						height="auto"
						// style = {widht: '10%', height: '100%'}
						className="rounded mx-auto d-block img-fluid"

					/>

				</p>

				<div className = 'container'>

					{post.comments.length > 0 && post.comments.map( (comment, idx) => {

						return(

							<Comment_on_Post comment = {comment} key = {idx}/>

							)

					})}

					<div className = "container form-group m-3">

						<input 
							placeholder = "Add comment" 
							className = "form-control" 
							onChange = {
								(comment_to_add) => {

									this.setState({comment_to_add: comment_to_add.target.value})

								}
							}
							value = {this.state.comment_to_add}
						/>

						<button className="btn btn-primary m-3" type = "button" onClick={() => this.on_add_comment(post.doc_id)}>

							Add comment 

						</button>

					</div>
				</div>


	    	</div>

    	)

	}

}