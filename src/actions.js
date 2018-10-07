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

// const token = "59f825925479ab52d597fb0554206b29018867e3";

// const getGithubForks = username => fetch(`https://api.github.com/users/${username}/events?per_page=100&access_token=${token}`);

// export const login = username => dispatch => {
// 	getGithubForks(username)
// 	.then(res => res.json())
// 	//.then(profile => dispatch(handleLogin(profile)));
// 	.then(res => console.log(res))
// };
