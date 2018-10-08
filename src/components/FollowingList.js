import React from "react";
import styled from 'tachyons-components';

const Section = styled('section')`mt4`;
const H2 = styled('h2')`sans-serif f2 mb3`;
const Paragraph = styled('p')`sans-serif f6 mb3`;
const CircleImg = styled('img')`br-100 pa1 ba b--black-10 h3 w3`;
const Link = styled('a')`f6 dib link mid-gray dim`;

export default ({ followers }) => (
  <React.Fragment>
    <H2>Followers</H2>
      {followers.map((follower, i) => (
        <Section>
			    <CircleImg key={`follower-img-${i}`} src={follower.avatar_url} alt={`${follower.login}'s avatar`} />
			    <Paragraph key={`follower-name-${i}`}><Link href={follower.html_url}>{follower.login}</Link></Paragraph>
		    </Section>
      ))}
  </React.Fragment>
);