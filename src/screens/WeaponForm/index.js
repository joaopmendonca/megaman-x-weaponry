import React, { useState } from "react";
import "./index.css"; // Importe o arquivo de estilos

function WeaponForm() {
  const [formData, setFormData] = useState({
    nome: "",
    game: "",
    imagem: "",
    chefeDonoDaArma: "",
    fraquezaArma: "",
    descricao: "",
    backgroundColor: "#6FA1E8", // Cor padrão
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica de validação (opcional)
    if (!formData.nome) {
      alert("Por favor, preencha o nome da arma.");
      return;
    }

    // Aqui você pode lidar com o envio dos dados do formulário
    // Por exemplo, você pode enviar os dados para uma API ou atualizar o estado da sua aplicação
    console.log("Dados do formulário a serem enviados:", formData);

    // Limpar o formulário
    setFormData({
      nome: "",
      game: "",
      imagem: "",
      chefeDonoDaArma: "",
      fraquezaArma: "",
      descricao: "",
      backgroundColor: "#6FA1E8", // Cor padrão
    });
  };

  return (
    <div className="form-container">
      <h1>Adicionar Nova Arma</h1>
      <form onSubmit={handleSubmit} className="weapon-form">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="game">Game:</label>
          <input
            type="text"
            id="game"
            name="game"
            value={formData.game}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagem">Imagem:</label>
          <input
            type="text"
            id="imagem"
            name="imagem"
            value={formData.imagem}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="chefeDonoDaArma">Chefe Dono da Arma:</label>
          <input
            type="text"
            id="chefeDonoDaArma"
            name="chefeDonoDaArma"
            value={formData.chefeDonoDaArma}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fraquezaArma">Fraqueza da Arma:</label>
          <input
            type="text"
            id="fraquezaArma"
            name="fraquezaArma"
            value={formData.fraquezaArma}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn-submit">Adicionar Arma</button>
        </div>
      </form>
    </div>
  );
}

export default WeaponForm;
