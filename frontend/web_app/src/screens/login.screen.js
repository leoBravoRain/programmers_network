import React, { Component } from "react";
// import { BrowserRouter as Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom'
// import {fs, st} from "../config/firebase";
// import icons_users from "constants";

export default class Login extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			// comment_to_add: "",
			// photo: null,
			// comments: [],

		}

		this.handle_login = this.handle_login.bind(this);

	}

	handle_login() {

		// redirect to home
		this.props.history.push('/home');

	}

	render() {

		return (

			<div className = "container">

				<h4>

					Welcome to the programmer's social network!

				</h4>

				<div className = "container">

					Here you can share all your achievments, doubts or ideas with all the comunity of programmers, getting the best feedback from them! Happy codding!

				</div>

				<p className = 'container'> 

					<button className="btn btn-primary m-3" type = "button" onClick={this.handle_login}>

						I am a programmer

					</button>

              	</p>

			</div>

		);

	}

}