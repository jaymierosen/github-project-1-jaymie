import React from "react";
import Btn from '@material-ui/core/Button';

const Button = props => (
	<div className="btn">
		<Btn variant="raised" color="primary" onClick={props.handleClick}>
			{props.value}
		</Btn>
	</div>
);

export default Button;
