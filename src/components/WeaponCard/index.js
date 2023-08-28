import React from "react";
import "./index.css";

function WeaponCard({
  nome,
  game,
  imagem,
  chefeDonoDaArma,
  fraquezaArma,
  descricao,
  backgroundColor,
}) {
  // Verifique se backgroundColor está definido, se não, use a cor padrão
  const cardHeaderStyle = {
    backgroundColor: backgroundColor || "rgb(127, 244, 255)", // Cor padrão: azul
  };

  return (
    <div className="weapon-card">
      <div className="cardHeader" style={cardHeaderStyle}>
        <h3>{nome}</h3>
        <img src={imagem} alt={nome} />
      </div>
      <div className="cardContent">
        <p>Game: {game} </p>
        <p>Chefe Dono da Arma: {chefeDonoDaArma}</p>
        <p>Fraqueza da Arma: {fraquezaArma}</p>
        <p>{descricao}</p>
      </div>
    </div>
  );
}

export default WeaponCard;
