import React, { Component } from "react";
//import ReactDOM from "react-dom";
import Login from "./Login";
import Profile from "./Profile.js";

class App extends Component {
	// first we run the constructor method
	// sets up our states
	constructor() {
		// for the this keyword
		super();
		this.state = {
			loggedin: false,
			token: "59f825925479ab52d597fb0554206b29018867e3",
			// use pkanal for testing purposes
			// set username to an empty string
			username: "",
			// set firstname to an empty string
			firstname: "",
			// setting a repos object to store our json data result
			forkEvents: [],
			pullRequestsEvents: [],
			pullRequestsEventsURLs: []
		};
		// binding our functions here -->
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogOut = this.handleLogOut.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleLogin() {
		this.getGithubUser(this.state.username, this.state.token)
		.then(res => res.json())
		.then((events) => {
			// filter only ForkEvents
			const forkEvents = events.filter((event) => event.type === "ForkEvent");
			// filter only PullRequestEvent
			const pullRequestsEvents = events.filter(event => event.type === 'PullRequestEvent');
			const pullRequestsEventsURLs = pullRequestsEvents.map((pr) => {
				//return console.log(pr.payload.pull_request.url)
				return fetch(pr.payload.pull_request.url)
				.then(response => response.json())
				.then((pr) => {
					console.log(pr)
					//return pr
				});
			})
			this.setState({
				forkEvents: forkEvents,
				pullRequestsEvents: pullRequestsEvents,
				pullRequestsEventsURLs: pullRequestsEventsURLs,
				loggedin: true
			})
		})
	}

	handleLogOut() {
		this.setState({
			forkEvents: [],
			pullRequestsEvents: [],
			loggedin: false,
			username: "",
			firstname: ""
		});
	}

	getGithubUser(username, token) {
		return fetch(
			`https://api.github.com/users/${username}/events?per_page=100&access_token=${token}`
		);
	}

	getGithubPullRequests(url) {
		return fetch(url);
	}

	// render method outputs all our html
	render() {
		return (
			<div className="container">
				<form className="main-form" onSubmit={this.handleSubmit}>
					{/* 'this' is refering to the login component now! */}
					{this.state.loggedin ? (
					// <Profile handleLogOut={this.handleLogOut} />
					// spread all keys from profile into Profile component
					<Profile
						firstname={this.state.firstname}
						handleClick={this.handleLogOut}
						forkEvents={this.state.forkEvents}
						pullRequestsEvents={this.state.pullRequestsEvents}
						pullRequestsEventsURLs = {this.state.pullRequestsEventsURLs}
					/>
					) : (
					<Login
						handleClick={this.handleLogin}
						firstname={this.state.firstname}
						username={this.state.username}
						handleChange={this.handleChange}
					/>
					)}
				</form>
			</div>
		);
	}
}

export default App;
