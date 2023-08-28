import React from "react";
import WeaponCard from "../WeaponCard"; // Verifique o caminho correto

import "./index.css";

function CardContainer({ title, cards }) {
  return (
    <div className="news">
      <div className="card-container">
        <div>
          <h1>{title}</h1>
          <div className="cards">
            {cards.map((card, index) => (
              <WeaponCard
                key={index}
                nome={card.nome}
                game={card.game}
                imagem={card.imagem}
                chefeDonoDaArma={card.chefeDonoDaArma}
                fraquezaArma={card.fraquezaArma}
                descricao={card.descricao}
                backgroundColor={card.backgroundColor} // Passe a cor de fundo do objeto JSON
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
