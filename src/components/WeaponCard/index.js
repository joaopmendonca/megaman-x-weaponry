import React from "react";

import "./index.css";

function WeaponCard({ nome, imagem, chefeDonoDaArma, fraquezaArma, descricao }) {
  return (
    <div className="weapon-card">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>Chefe Dono da Arma: {chefeDonoDaArma}</p>
      <p>Fraqueza da Arma: {fraquezaArma}</p>
      <p>{descricao}</p>
    </div>
  );
}

export default WeaponCard;
