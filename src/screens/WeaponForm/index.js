import React from "react";
import CustomTextButton from "../../components/CustomTextButton";

import "./index.css";

function WeaponForm() {
  return (
    <div className="weaponForm">
      <h1 className="formTitle">Preencha com os dados da Arma</h1>
      <form className="formContainer">
        <div className="formField">
          <label className="formLabel">Nome</label>
          <input className="formInput" type="text" />
        </div>
        <div className="formField">
          <label className="formLabel">Game</label>
          <input className="formInput" type="text" />
        </div>
        <div className="formField">
          <label className="formLabel">Imagem</label>
          <input className="formInput" type="text" />
        </div>
        <div className="formField">
          <label className="formLabel">Chefe Dono Da Arma</label>
          <input className="formInput" type="text" />
        </div>
        <div className="formField">
          <label className="formLabel">Fraqueza da Arma</label>
          <input className="formInput" type="text" />
        </div>
        <div className="formField">
          <label className="formLabel">Descrição</label>
          <textarea className="formTextarea"></textarea>
        </div>
        <div className="formField">
          <label className="formLabel">Background Color</label>
          <input className="formInput" type="text" />
        </div>
        <div className="button">
          <CustomTextButton buttonText="Cadastrar Arma" backgroundColor="#2979FF" />
        </div>
      </form>
    </div>
  );
}

export default WeaponForm;
