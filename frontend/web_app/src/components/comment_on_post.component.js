import React, { Component } from "react";
// import {fs, st} from "../config/firebase";
// import icons_users from "constants";

export default class Comment_on_Post extends Component {

	render() {

		const comment = this.props.comment;

		return (

			<div className="media border border-left-0 border-right-0 p-1">

				<img width="30" height="30" src = {comment.user_image}  className="mr-3" alt="user image"/>

				<div className="media-body ">

					<h5 className ="mt-0">

						{comment.user}

					</h5>

					{comment.user_comment}

				</div>

			</div>

		);

	}

}