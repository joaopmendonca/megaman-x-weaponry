import React from "react";
import Banner from "../../components/Banner";
import "./index.css";
import CardContainer from "../../components/CardContainer";
import weaponsData from "../../components/WeaponCard/weaponData.json"; // Importe o arquivo JSON com os dados das armas

function Home() {
  return (
    <div className="presentationContainer">
      <div className="presentation">
        <Banner />
        <div className="presentationText">
          <h2>Explore as Armas de Megaman X</h2>
          <p>
            Bem-vindo ao seu guia definitivo para o universo de armas de Megaman
            X. Aqui, você encontrará uma lista completa de todas as armas que
            definem esse lendário mundo dos jogos. Descubra suas
            características, habilidades e como usá-las para enfrentar desafios
            épicos. Se você é um fã dedicado ou está apenas começando a sua
            jornada, estamos aqui para ajudar você a se tornar um verdadeiro
            mestre das armas de Megaman X. Vamos começar a exploração!
          </p>
        </div>
      </div>
      <CardContainer title="Ultimos Cards Adicionados" cards={weaponsData} /> {/* Passa os dados das armas como propriedade */}
    </div>
  );
}

export default Home;
