import React from "react";
import FollowingList from "./FollowingList.js";
//import Button from "./Button.js";
import ReposList from "./ReposList.js";
import Header from "./Header";
import styled from 'tachyons-components';

//const H2 = styled('h2')`sans-serif f2`;
const Container = styled('article')`dt dt--fixed`;
//const MainHeader = styled('header')`tc pa3 pa5-ns br3`;
//const Div = styled('div')`sans-serif mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10`;
//const Row = styled('section')`dtc tc pv4`;
const RowGray = styled('section')`dtc tc pv4 bg-black-05`;
//const CircleImg = styled('img')`br-100 pa1 ba b--black-10 h3 w3`;
//, 
export default ({ login, name, avatar_url, handleLogout, followers, events }) => {
  return (
	<React.Fragment>
		{/* <Container> */}
			<Header handleLogout={handleLogout} login={login} name={name} avatar_url={avatar_url} />
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
