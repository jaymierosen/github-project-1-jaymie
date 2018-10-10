import { config } from "./config";

const ACTIONS = {
  CHANGE_USERNAME: "CHANGE_USERNAME",
  CHANGE_FIRST_NAME: "CHANGE_FIRST_NAME",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  FETCH_FOLLOWERS: "FETCH_FOLLOWERS",
  FETCH_EVENTS: "FETCH_EVENTS"
};

// get username
export const handleChangeUsername = e => ({
    type: ACTIONS.CHANGE_USERNAME,
    payload: e.target.value
  });
  
// get firstname
export const handleChangeFirstName = e => ({
  type:  ACTIONS.CHANGE_FIRST_NAME,
  payload: e.target.value
});

// github username
const getGithubUser = (username) => fetch(`https://api.github.com/users/${username}?per_page=100&access_token=${config.MY_KEY}`);

// github events
const getGithubEvents = (username) => fetch(`https://api.github.com/users/${username}/events?per_page=100&access_token=${config.MY_KEY}`);

// login
export const login = (username) => dispatch => {
  getGithubUser(username)
    .then(res => res.json())
    .then(profile => dispatch(handleLogin(profile)));
  getGithubEvents(username)
    .then(res => res.json())
    //.then(events => dispatch(handleLogin(events)))
    .then(events => {
      const filteredEvents = events.filter(event => event.type === "ForkEvent" || event.type === "PullRequestEvent");
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
      Promise.all([...events]).then(events => dispatch(handleEvents(events)));
    })
};

const handleEvents = events => ({
  type: ACTIONS.FETCH_EVENTS,
  payload: events
})

// handleLogin
const handleLogin = profile => ({
  type: ACTIONS.LOGIN,
  payload: profile
});

// handleLogout
// ** action not working **
export const handleLogout = () => ({
  type: ACTIONS.LOGOUT
});

/* export const handleLogout = () => {
  console.log('working?')
} */

const saveFollowers = followers => ({
  type: ACTIONS.FETCH_FOLLOWERS,
  payload: followers
});

const getGithubFollowing = url => fetch(url);

export const fetchFollowers = followersUrl => dispatch => {
  getGithubFollowing(followersUrl)
    .then(res => res.json())
    .then(followers => dispatch(saveFollowers(followers)));
};