// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// const initialState = {
// 	loggedin: false,
// 	token: "59f825925479ab52d597fb0554206b29018867e3",
// 	// use pkanal for testing purposes
// 	// set username to an empty string
// 	username: "",
// 	// set firstname to an empty string
// 	firstname: "",
// 	// setting a repos object to store our json data result
// 	forkEvents: [],
// 	pullRequestsEvents: [],
// 	pullRequestsEventsURLs: []
// };

// const rootReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case "CHANGE_USERNAME":
// 			return {
// 				...state,
// 				username: action.payload
// 			};
// 		case "CHANGE_FIRST_NAME":
// 			return {
// 				...state,
// 				firstName: action.payload
// 			};
// 			case "LOGIN":
// 			return {
// 				...state,
// 				loggedIn: true,
// 				forkEvents: action.payload
// 			};
// 			case "LOGOUT":
// 				return {
// 				...state,
// 				loggedIn: false,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export default createStore(
// 	rootReducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// 	applyMiddleware(thunk)
// );