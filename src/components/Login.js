import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		width: '100%',
		maxWidth: 500,
	},
};

const Login = props => (
	<div>
		<Typography variant="headline" gutterBottom>
			GitHub app
		</Typography>
		<Typography variant="title" gutterBottom>
			Login with your GitHub username and first name
		</Typography>
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
