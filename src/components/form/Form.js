import React, { useCallback, useState } from "react";
import FormInput from "./FormInput";
import "./Form.css";

const Form = ({ name, age, gender, handleChangeInput, handleSubmit }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (name === "" || age === 0 || !gender) {
        setIsFormValid(false);
        return;
      } else {
        setIsFormValid(true);
        handleSubmit();
      }
    },
    [age, gender, handleSubmit, name]
  );

  return (
    <div>
      <form className="Form" onSubmit={(e) => onSubmit(e)}>
        <p className="label">Nome</p>
        <FormInput
          type="text"
          name="name"
          id="name"
          value={name}
          handleChangeInput={handleChangeInput}
          onChange={(e) => handleChangeInput(e, "name")}
          placeholder="Insira seu nome aqui"
        />
        <p className="label">Idade</p>
        <FormInput
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={(e) => handleChangeInput(e, "age")}
          handleChangeInput={handleChangeInput}
        />
        <p className="label">Gênero</p>
        <div
          className="radioContainer"
          onChange={(e) => handleChangeInput(e, "gender")}
          handleChangeInput={handleChangeInput}
        >
          <FormInput type="radio" name="gender" id="gender" value="Masculino" />
          <FormInput type="radio" name="gender" id="gender" value="Feminino" />
          <FormInput type="radio" name="gender" id="gender" value="Outro" />
        </div>
        <button type="submit" className="submitButton">
          Enviar
        </button>
        {!isFormValid && <p>Favor preencher todos os campos acima.</p>}
      </form>
    </div>
  );
};

export default Form;
