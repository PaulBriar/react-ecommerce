import React from "react";

import "./FormInput.styles.scss";

const FormInput = ({ handleChange, label, name, ...props }) => {
  return (
    <div className="group">
      <input
        name={name}
        className="form-input"
        onChange={handleChange}
        {...props}
      />
      {label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
          htmlFor={name}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
