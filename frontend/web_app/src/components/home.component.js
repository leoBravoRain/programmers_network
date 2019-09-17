import React, { Component } from 'react';

// import firestore
import {fs, st} from "../config/firebase";
import firebase from "firebase";
import "firebase/firestore";


const icons_users = [

	// "data:image/png;base64,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",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRQ2v7gqVmQnRZ7ZV1Bt5zjhQ7bpYM7nBUCvXbHvLTeKWpFLl",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97CD4DZvTbNCtPtUQssaNnIj9yBgkkz74WCWQhhBGITqBJycIPw",
	"https://cdn.iconscout.com/icon/free/png-256/geek-2-160919.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMvL427OzvfmwIN3bwxnnnm4WcTpIhgc1mRC7IuWsjZUr2EIi",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBYpWV-fme6cx198UFWztQSNMhasKmHEFlP0BrzXBxHWN8QOR",

]

class Comment_on_Post extends Component {

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

class Post extends Component {

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
class Posts extends Component {

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

class New_Post extends Component{

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

export default class Home extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			posts: [],
			get_posts: false,

		}

	}


	componentDidMount() {

		// query to firestore
		fs.collection('posts').get().then( snapshotquery => {

		  // if query is not empty
		  if (!snapshotquery.empty) {

		    // // array for store categories
		    let posts = [];

		    // iterate over each item
		    snapshotquery.forEach(doc => {

		    	// console.log(doc.data());
		    	let post = doc.data();
		    	post['doc_id'] = doc.id;
		    	// post['image'] = "https://www.oreilly.com/library/view/deep-learning/9781491924570/assets/dpln_0201.png";
				// add item to array
				// posts.push(doc.data());
				posts.push(post);

		    });

		    // update state
		    this.setState({

		      posts: posts,

		      // flag
		      get_posts: true,

		    });

		  } 

		  // if query is empty
		  else {

		      // doc.data() will be undefined in this case
		      console.log("No such document!");

		  }

		});

	};

    render() {

		const posts = [

			{
				user_image: "data:image/jpeg;base64,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",
				user: "Leo Bravo",
				user_comment: "What is the name of this NN arquitecture?",
				image: "https://www.oreilly.com/library/view/deep-learning/9781491924570/assets/dpln_0201.png",
				comments: [

					{
						user_image: "data:image/jpeg;base64,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",
						user: "Andrew Ng",
						user_comment: "MLP my friend :)"
					},
					{
						user_image: "data:image/jpeg;base64,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",
						user: "Steve Wosniak",
						user_comment: "MLP dear friend!"
					}
				],

			},
			{
				user_image: "data:image/jpeg;base64,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",
				user: "Martin Lopez",
				user_comment: "What algorithm do you choose?",
				image: "https://miro.medium.com/max/1200/1*iEbD3x2S5KOiEI6ZOltp9w.png",
				comments: [
					{
						user_image: "https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-19-512.png",
						user: "Bill Gates",
						user_comment: "O(1) always !! that is a dream ! ajaj"
					}
				],
			},
			{
				user_image: "data:image/jpeg;base64,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",
				user: "Michale Doom",
				user_comment: "My first search algorightm ! jijij",
				image: "data:image/png;base64,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",
				comments: [
					{
						user_image: "data:image/jpeg;base64,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",
						user: "Leo Bravo",
						user_comment: "Congrats my friend!"
					},
				],
			}

		]

        return (

        	<div className = "container">

	            <New_Post />

	            <Posts posts = {this.state.posts} />


           	</div>



        )

    }

}