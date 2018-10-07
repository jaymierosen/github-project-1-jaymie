import React from "react";

const TextField = props => {
  const { value, handleChange, label, id, name } = props;
  return (
    <div className="text-field">
      <label htmlFor={id}>{label}</label>
      <input type="text" value={value} onChange={handleChange} name={name} id={id} />
    </div>
  );
};

export default TextField;
