import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";
const Login = props => (
  <div>
    <h2>please enter your github username to login</h2>
    <TextField
      value={props.username}
      label="username"
      id="github-username"
      handleChange={props.handleChange}
      name="username"
    />
    <TextField
      value={props.firstname}
      label="first name"
      id="github-username"
      handleChange={props.handleChange}
      name="firstname"
    />
    <Button
      handleClick={props.handleClick}
      value="Login"
    />
  </div>
);

export default Login;
