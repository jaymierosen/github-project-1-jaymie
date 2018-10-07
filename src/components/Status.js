import React from "react";

const Status = props => {
	return (
		<div>
			{props.pullRequests.id}
			{/*{props.pullRequests.map((item) => {
		 		return console.log(item)
		 	})}*/}
		</div>
	);
};

export default Status;

{/* {repo.payload.pull_request.state === "open" ? (
<h4 key={`pr-status-${repo.id}`} style={{ color: "red" }}>
PR state: {repo.payload.pull_request.state}
</h4>
) : (
<h4 key={`pr-status-${repo.id}`} style={{ color: "green" }}>
PR state: {repo.payload.pull_request.state}
</h4>
)}; */}