import React from "react";

const Forks = props => {
	return (
		<div className="forks">
			{props.events.map((item) => {
				return <p>{item.type}</p>
			})}
		</div>
	)
}

export default Forks;