import React from "react";
import styled from 'tachyons-components';

const Btn = styled('button')`f6 w-100 grow no-underline br-pill ph3 pv2 mt3 mb3 dib white bg-light-purple`

const Button = props => (
  <Btn onClick={props.handleClick}>{props.value}</Btn>
);

export default Button;