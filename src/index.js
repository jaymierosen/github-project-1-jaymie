import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import Profile from "./components/Profile.js";

import "./styles.css";

class App extends Component {
  // first we run the constructor method
  // sets up our states
  constructor() {
    // for the this keyword
    super();
    this.state = {
      // set username to an empty string
      loggedin: false,
      token: "89dd71b9e096a14467607e2a537306f78aadfa3c",
      // use pkanal for testing purposes
      username: "",
      firstname: "",
      // setting a repos object to store our json data result
      repos: [],
      pullRequests: []
    };
    // binding our functions here -->
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  // taking in change event/
  // setting state - the name of the input is the value
  // 'this' is refering to the App
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin() {
    this.getGithubUser(this.state.username, this.state.token)
      .then(res => res.json())
      .then(data =>
        this.setState({
          repos: data,
          loggedin: true
        })
      );
  }

  handleLogOut() {
    this.setState({
      repos: [],
      loggedin: false
    });
    // remove their username from local storage
    // set the local storage logged in value to false
  }

  getGithubUser(username, token) {
    // https://api.github.com/users/jaymierosen?access_token=89dd71b9e096a14467607e2a537306f78aadfa3c
    return fetch(
      `https://api.github.com/users/${username}/events?per_page=100&access_token=${token}`
    );
  }

  getGithubPullRequests(url) {
    return fetch(url);
  }

  // fetching update
  componentDidMount() {
    // check if the username is stored in local storage,
    // and if logged in true is in local storage
    // if username is in local storage,
    // fetch data from github api,
    // set logged in to true
  }

  // props before update
  // state before update
  // ** use this when props or state changes **
  componentDidUpdate(prevProps, prevState) {
    // // if loggedin is false
    // if (prevState.loggedin !== this.state.loggedin) {
    //   // if repo's type is a pullrequestevent
    //   // call pull request api url
    //   // this.state.repos.payload.pull_request.url
    //   if (this.state.repos.type === "PullRequestEvent") {
    //     this.getGithubPullRequests(
    //       "https://api.github.com/repos/bridge-school/bridge-slides-spectacle/pulls/41"
    //     ).then(res => res.json().then(data => console.log(data)));
    //   }
    // }
  }
  // render method outputs all our html
  render() {
    return (
      <div className="App">
        <h1>Github Developer</h1>
        {/* 'this' is refering to the login component now! */}
        {this.state.loggedin ? (
          // <Profile handleLogOut={this.handleLogOut} />
          // spread all keys from profile into Profile component
          <Profile
            firstname={this.state.firstname}
            handleClick={this.handleLogOut}
            repos={this.state.repos}
            pullRequests={this.state.pullRequests}
          />
        ) : (
          <Login
            handleClick={this.handleLogin}
            firstname={this.state.firstname}
            username={this.state.username}
            handleChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
