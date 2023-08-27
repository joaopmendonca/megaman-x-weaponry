import React from "react";
import WeaponCard from "../WeaponCard"; // Verifique o caminho correto

import "./index.css";

function CardContainer({ title, cards }) {
  return (
    <div className="news">
      <div className="card-container">
        <h1>{title}</h1>
        <div className="cards">
          {cards.map((card, index) => (
            <WeaponCard
              key={index}
              nome={card.nome}
              imagem={card.imagem}
              chefeDonoDaArma={card.chefeDonoDaArma}
              fraquezaArma={card.fraquezaArma}
              descricao={card.descricao}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
