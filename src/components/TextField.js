import React from "react";
import styled from 'tachyons-components';

const Label = styled('label')`sans-serif db mid-gray fw4 lh-copy f6`;

const Input = styled('input')`sans-serif pa2 input-reset ba bg-transparent w-100 measure`;

const TextField = props => {
  const { value, handleChange, label, id, name } = props;
  return (
    <React.Fragment>
      <Label htmlFor={id}>{label}</Label>
      <Input type="text" value={value} onChange={handleChange} name={name} id={id} />
    </React.Fragment>
  );
};

export default TextField;
