import React, { Component } from "react";
import Post from "./post.component";

// material ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default class Posts extends Component {

	render() {

		return (

			<Grid 
				container
				// maxWidth="m" 
				style = {{marginTop: 30}}
				alignItems="center"
			 	justify="center"

			>

				{this.props.posts.map( (post, idx) => 

		        	<Post post = {post} key={idx.toString()} />

				)}

	        </Grid>
        )

	}

}