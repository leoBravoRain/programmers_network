import React, { Component } from "react";
import Post from "./post.component";

export default class Posts extends Component {

	render() {

		return (

			<div className = "container">

				{this.props.posts.map( (post, idx) => 

		        	<Post post = {post} key={idx.toString()} />

				)}

	        </div>
        )

	}

}