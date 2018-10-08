import React from "react";
import FollowingList from "./FollowingList.js";
import Button from "./Button.js";
import ReposList from "./ReposList.js";
import styled from 'tachyons-components';

const H2 = styled('h2')`sans-serif f2`;
const Container = styled('article')`dt dt--fixed`;
const Header = styled('header')`tc pa3 pa5-ns br3`;
const Div = styled('div')`sans-serif mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10`;
//const Row = styled('section')`dtc tc pv4`;
const RowGray = styled('section')`dtc tc pv4 bg-black-05`;
const CircleImg = styled('img')`br-100 pa1 ba b--black-10 h3 w3`;

export default ({ login, avatar_url, handleLogOut, followers, events }) => {
  return (
	<React.Fragment>
		{/* <Container> */}
			<Header>
				<Div>
					{/* we spread in the profile object */}
					<H2>Hi, {login}!</H2>
					{/*<h2>Hi, {props.firstname.charAt(0).toUpperCase() + props.firstname.slice(1)}!</h2>*/}
					{/* <img src={props.avatar_url} alt="me" /> */}
					{/*<img src={props.avatar_url} alt="me" />*/}
					{/* <Button handleClick={props.handleClick} value="Logout" />
					<FollowingList followers={props.followers} /> */}
					<CircleImg src={avatar_url} alt={`${login}'s avatar'`} />
					{/* <Button value="Login" handleClick={handleLogin} /> */}
					<Button value="Log Out" handleClick={() => console.log(handleLogOut)} />
					{/* logout button not working */}
				</Div>
			</Header>
		{/* </Container> */}
		<Container>
		<RowGray>
			<FollowingList followers={followers} />
		</RowGray>
		<RowGray>
			<ReposList events={events} />
		</RowGray>
		</Container>
	</React.Fragment>
  );
};
