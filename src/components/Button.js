import React from "react";

const Button = props => (
	<div className="btn">
		<button onClick={props.handleClick}>
			{props.value}
		</button>
	</div>
);

export default Button;
