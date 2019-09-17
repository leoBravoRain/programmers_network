import React, { Component } from "react";
import Post from "./post.component";

// material ui
import Container from '@material-ui/core/Container';

export default class Posts extends Component {

	render() {

		return (

			<Container>

				{this.props.posts.map( (post, idx) => 

		        	<Post post = {post} key={idx.toString()} />

				)}

	        </Container>
        )

	}

}