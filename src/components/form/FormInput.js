import React from "react";
import "./FormInput.css";
const FormInput = ({
  type,
  id,
  value,
  handleChangeInput,
  placeholder,
  required,
  label,
}) => {
  return (
    <div className="FormInput">
      <p className="label">{label}</p>
      <input
        className="FormInput_area"
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={(e) => handleChangeInput(e, id)}
        placeholder={placeholder || ""}
        required={required}
      />
      {type === "radio" && <p className="radioText">{value}</p>}
    </div>
  );
};

export default FormInput;
