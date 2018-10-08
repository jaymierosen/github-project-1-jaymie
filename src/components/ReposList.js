import React from "react";
import Forks from "./Forks";
import PullRequests from "./PullRequests";
import styled from 'tachyons-components';

const H2 = styled('h2')`sans-serif f2 mb3`;

export default ({ events }) => (
	<React.Fragment>
		<H2>Fork Events</H2>
		<Forks events={events} />
		<H2>Pull Request Events</H2>
		<PullRequests events={events} />
	</React.Fragment>
);