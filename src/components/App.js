import React, { Component } from "react";
//import ReactDOM from "react-dom";
import Login from "./Login.js";
import Profile from "./Profile.js";

class App extends Component {
  // first we run the constructor method
  // sets up our states
  constructor() {
    // for the this keyword
    super();
    this.state = {
      // set username to an empty string
      loggedin: false,
      token: "4f1153bcb120bbe0dae439da4565caa894334431",
      username: "",
      firstname: "",
      // setting a profile object to store our json data result
      profile: {},
      followers: [],
      forkEvents: [],
      pullRequestEvents: [],
      pullRequestEventsURL: [],
      events: []
    };
    // binding our functions here -->
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.localStorage = this.localStorage.bind(this);
  }

  // taking in change event/
  // setting state - the name of the input is the value
  // 'this' is refering to the App
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    //localStorage.setItem([e.target.name], e.target.value);
  }

  handleLogin() {
    this.getGithubUser(this.state.username, this.state.token)
      .then(res => res.json())
      .then(data =>
        this.setState({
          profile: data,
          loggedin: true
        })
      );
  }

  handleLogOut() {
    localStorage.setItem("loggedIn", false);
    this.setState({
      profile: {},
      loggedin: false
    });
    // remove their username from local storage
    // set the local storage logged in value to false
  }

  getGithubUser(username, token) {
    return fetch(
      `https://api.github.com/users/${username}?per_page=100&access_token=${token}`
    );
  }

  getGithubEvents(username, token) {
    return fetch(
      `https://api.github.com/users/${username}/events?per_page=100&access_token=${token}`
    );
  }

  getGithubFollowing(url) {
    return fetch(url);
  }

  getGithubPullRequests(url) {
    return fetch(url);
  }

  localStorage() {
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("loggedIn", true);
  }

  componentDidMount() {
    // check if the username is stored in local storage,
    // and if logged in true is in local storage
    // if username is in local storage,
    // fetch data from github api,
    // set logged in to true
    if (
      localStorage.getItem("loggedIn") === true &&
      localStorage.getItem("username")
    ) {
      let username = localStorage.getItem("username");
      this.getGithubUser(username)
        .then(res => res.json())
        .then(data =>
          this.setState({
            profile: data,
            loggedIn: true,
            username
          })
        );
    }
  }

  // props before update
  // state before update
  // ** use this when props or state changes **
  componentDidUpdate(prevProps, prevState) {
    //console.log(prevState);
    //console.log(this.state);
    // if loggedin is false
    if (prevState.loggedin !== this.state.loggedin) {
      //console.log(prevState.loggedin);
      //console.log(this.state.loggedin);
      // if loggedin is true
      if (this.state.loggedin) {
        this.getGithubFollowing(this.state.profile.followers_url).then(res =>
          res.json().then(data =>
            this.setState({
              followers: data
            })
          )
        );
        this.getGithubEvents(this.state.username, this.state.token)
      .then(res => res.json())
      .then(events => {
        const filteredEvents = events
        .filter(
          event => event.type === "ForkEvent" || event.type === "PullRequestEvent"
        );
        return filteredEvents;
      })
      .then(data => {
        const events = data.map(event => {
          if (event.type === "PullRequestEvent") {
            return fetch(event.payload.pull_request.url)
            .then(res => res.json())
            .then(data =>  ({...event, status: data.state, title: data.title, html_url: data.html_url }))
          } else {
            return event
          }
        });
        Promise.all([...events]).then(events => this.setState({ events }));
      })
      // .then(filteredEvents => {
      //   const newfilteredEvents = filteredEvents.map((event) => {
      //     if (event.type === "PullRequestEvent") {
      //       this.getGithubFollowing(event.payload.pull_request.url)
      //       .then(res => res.json())
      //       .then(res => [...this.state.events])
      //     } else {
      //       return this.state.events
      //     }
      //   })
      //   return newfilteredEvents;
      // })
      }
    }
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
            {...this.state.profile}
            firstname={this.state.firstname}
            handleClick={this.handleLogOut}
            followers={this.state.followers}
            //forkEvents={this.state.forkEvents}
            //pullRequestEvents={this.state.pullRequestEvents}
            events={this.state.events}
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

export default App;
