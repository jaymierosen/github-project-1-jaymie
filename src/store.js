import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import { loadState, saveState } from "./constants/localStorage";

const initialState = {
    // set username to an empty string
    loggedIn: false,
    username: "",
    firstname: "",
    // setting a profile object to store our json data result
    profile: {},
    followers: [],
    events: []
  };

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CHANGE_USERNAME":
        return {
          ...state,
		  username: action.payload,
        };
    //   case "CHANGE_FIRST_NAME":
    //     return {
    //       ...state,
    //       firstName: action.payload
    //     };
      case "LOGIN":
        return {
          ...state,
          loggedIn: true,
          profile: action.payload
        };
        // ** action not working **
      case "LOGOUT":
        return {
          ...state,
          loggedIn: false,
          profile: {},
          followers: [],
          events: []
        };
      case "FETCH_FOLLOWERS":
        return {
          ...state,
          followers: action.payload
        };
      case "FETCH_EVENTS":
        return {
          ...state,
          events: action.payload
        };
      default:
        return state;
    }
  };

// store.subscribe(() => {
// 	saveState({
// 		todos: store.getState().todos
// 	});
// });

export default createStore(
	rootReducer,
	//persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)
);