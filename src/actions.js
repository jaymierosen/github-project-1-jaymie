// export const handleChangeUsername = e => ({
// 	type: "CHANGE_USERNAME",
// 	payload: e.target.value
// });

// export const handleChangeFirstName = e => ({
// 	type: "CHANGE_FIRST_NAME",
// 	payload: e.target.value
// });

// const handleLogin = forkEvents => ({
// 	type: "LOGIN",
// 	payload: forkEvents
// });

// export const handleLogout = () => ({
// 	type: "LOGOUT"
// });

// const token = "bbc053204e3276f3ceae2c4739b902f4d5a66ed9";

// const getGithubEvents = username => fetch(`https://api.github.com/users/${username}/events?per_page=100&access_token=${token}`);

// export const filterEvents = username => dispatch => {
// 	getGithubEvents(username)
// 	  .then(res => res.json())
// 	  .then((events) => {
// 		const forkEvents = events.filter((event) => event.type === "ForkEvent");
// 		const pullRequestEvents = events.filter((event) => event.type === "PullRequestEvent");
// 		//console.log(forkEvents, pullRequestEvents)
// 		dispatch(handleLogin(forkEvents, pullRequestEvents))
// 	  })
// 	  //.then(profile => dispatch(handleLogin(profile)));
//   };

  
