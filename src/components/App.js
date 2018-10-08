import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login.js";
import Profile from "./Profile.js";
import { handleChangeUsername,
  handleChangeFirstName,
  login,
  handleLogout,
  fetchFollowers } from "../actions";

class App extends Component {
  setUserInLocalStorage() {
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("loggedIn", true);
  }
  componentDidMount() {
    if (
      localStorage.getItem("loggedIn") === true &&
      localStorage.getItem("username")
    ) {
      let username = localStorage.getItem("username");
      return username;
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.loggedIn !== this.props.loggedIn) {
      if (this.props.loggedIn) {
        this.props.fetchFollowers(this.props.profile.followers_url);
      }
    }
  }
  // render method outputs all our html
  render() {
    return (
      <div className="App">
        {/* 'this' is refering to the login component now! */}
        {this.props.loggedIn ? (
          // spread all keys from profile into Profile component
          <Profile 
			{...this.props.profile} 
			followers={this.props.followers} 
			events={this.props.events} 
      handleLogOut={() => this.props.handleLogOut}/>
        ) : (
          <Login
			handleChangeUsername={this.props.handleChangeUsername}
			handleChangeFirstName={this.props.handleChangeFirstName}
			handleLogin={() => this.props.login(this.props.username)}
			username={this.props.username}
			firstName={this.props.firstName}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  handleChangeUsername,
  handleChangeFirstName,
  login,
  handleLogout,
  fetchFollowers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);