import React from "react";
import Input from '@material-ui/core/Input';

const TextField = props => {
  const { value, handleChange, label, id, name } = props;
  return (
    <div className="text-field">
      <label htmlFor={id}>{label}</label>
      <Input type="text" value={value} onChange={handleChange} name={name} id={id} />
    </div>
  );
};

export default TextField;
