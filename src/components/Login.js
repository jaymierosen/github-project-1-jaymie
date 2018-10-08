import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";
import styled from 'tachyons-components';

const H1 = styled('h1')`sans-serif f2 mb3`;
const Card = styled('section')`sans-serif mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10`;

export default ({
  handleChangeUsername,
  handleChangeFirstName,
  handleLogin,
  username,
  firstname
}) => (
  <Card className="login">
    <H1>please enter your github username to login</H1>
    <TextField
      name="username"
      handleChange={handleChangeUsername}
      id="github-username"
      label="Username"
      value={username}
    />
    {/* getting errors with this component */}
    <TextField
      name="firstName"
      handleChange={handleChangeFirstName}
      id="user-firstName"
      label="Your First Name"
      value={firstname}
    />
    <Button value="Login" handleClick={handleLogin} />
  </Card>
);