import React, { useState } from "react";
import "./index.css";
import DropDown from "../../components/DropDown";
import weaponsData from "../../components/WeaponCard/weaponData.json";


function WeaponForm(props) {
  // Lista de jogos
  const games = [
    "All",
    "Mega Man X",
    "Mega Man X2",
    "Mega Man X3",
    "Mega Man X4",
    "Mega Man X5",
    "Mega Man X6",
    "Mega Man X7",
    "Mega Man X8",
  ];

  // Estados para os campos do formulário
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [bossOwnerOfTheWeapon, setBossOwnerOfTheWeapon] = useState("");
  const [effectiveAgainst, setEffectiveAgainst] = useState("");
  const [selectedGame, setSelectedGame] = useState("All"); // Estado para rastrear a seleção de jogo
  const [formErrors, setFormErrors] = useState({
    name: "",
    image: "",
    bossOwnerOfTheWeapon: "",
    effectiveAgainst: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // Função para lidar com a seleção do jogo
  const handleGameChange = (selectedGame) => {
    setSelectedGame(selectedGame);
  };

  // Função para lidar com a mudança no campo "Nome"
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Função para lidar com a mudança no campo "Imagem"
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  // Função para lidar com a mudança no campo "Chefe Dono Da Arma"
  const handleBossChange = (event) => {
    setBossOwnerOfTheWeapon(event.target.value);
  };

  // Função para lidar com a mudança no campo "Fraqueza da Arma"
  const handleEffectiveAgainstChange = (event) => {
    setEffectiveAgainst(event.target.value);
  };

  // Função para validar os campos do formulário
  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      image: "",
      bossOwnerOfTheWeapon: "",
      effectiveAgainst: "",
    };

    if (name.trim() === "") {
      errors.name = "O nome é obrigatório.";
      isValid = false;
    }

    if (image.trim() === "") {
      errors.image = "A imagem é obrigatória.";
      isValid = false;
    }

    if (bossOwnerOfTheWeapon.trim() === "") {
      errors.bossOwnerOfTheWeapon = "O chefe dono da arma é obrigatório.";
      isValid = false;
    }

    if (effectiveAgainst.trim() === "") {
      errors.effectiveAgainst = "A fraqueza da arma é obrigatória.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validação do formulário
    if (validateForm()) {
      // O formulário é válido, prossiga com o processamento
      const newWeapon = {
        nome: name,
        game: selectedGame,
        imagem: image,
        chefeDonoDaArma: bossOwnerOfTheWeapon,
        fraquezaArma: effectiveAgainst,
        descricao: "Descrição da arma",
        backgroundColor: "#FFFFFF",
      };
  
      // Crie uma cópia da matriz weaponsData
      const updatedWeaponsData = [...weaponsData];
  
      // Adicione a nova arma à lista existente
      updatedWeaponsData.push(newWeapon);
  
      // Atualize a matriz weaponsData com a nova lista
      weaponsData = updatedWeaponsData;
  
      // Limpe os campos do formulário após a submissão
      setName("");
      setImage("");
      setBossOwnerOfTheWeapon("");
      setEffectiveAgainst("");
  
      // Mostrar a mensagem de sucesso
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
  
      // Defina um temporizador para esconder a mensagem de sucesso após alguns segundos (opcional)
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000); // Esconder após 3 segundos (ajuste conforme necessário)
    } else {
      // Mostrar a mensagem de erro
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    }
  };

  return (
    <div className="weaponForm">
      <h1 className="formTitle">Preencha com os dados da Arma</h1>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="formField">
          <label className="formLabel">Nome</label>
          <input
            className="formInput"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <div className="error">{formErrors.name}</div>
        </div>
        <div className="formField">
          <DropDown
            obrigatorio={true}
            label="Game"
            itens={games}
            onSelectionChange={handleGameChange} // Certifique-se de que a função correta esteja sendo passada aqui
          />
        </div>
        <div className="formField">
          <label className="formLabel">Imagem</label>
          <input
            className="formInput"
            type="text"
            value={image}
            onChange={handleImageChange}
          />
          <div className="error">{formErrors.image}</div>
        </div>
        <div className="formField">
          <label className="formLabel">Chefe Dono Da Arma</label>
          <input
            className="formInput"
            type="text"
            value={bossOwnerOfTheWeapon}
            onChange={handleBossChange}
          />
          <div className="error">{formErrors.bossOwnerOfTheWeapon}</div>
        </div>
        <div className="formField">
          <label className="formLabel">Fraqueza da Arma</label>
          <input
            className="formInput"
            type="text"
            value={effectiveAgainst}
            onChange={handleEffectiveAgainstChange}
          />
          <div className="error">{formErrors.effectiveAgainst}</div>
        </div>
        <div className="button">
          <button type="submit" className="customButton">
            Cadastrar Arma
          </button>
        </div>
        {showSuccessMessage && (
          <div className="success-message">Arma adicionada com sucesso!</div>
        )}
        {showErrorMessage && (
          <div className="error-message">Erro ao adicionar a arma.</div>
        )}
      </form>
    </div>
  );
}

export default WeaponForm;
