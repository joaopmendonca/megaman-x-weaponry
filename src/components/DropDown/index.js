import React from "react";
import "./index.css";

function DropDown(props) {
  // Função para lidar com a mudança de seleção no dropdown
  const handleSelectionChange = (event) => {
    // Chama a função passada através das props quando a seleção muda
    props.onSelectionChange(event.target.value);
  };

  return (
    <div className="dropDown">
      <label>{props.label}</label>
      <select
        onChange={handleSelectionChange}
        required={props.required}
        value={props.value}
      >
        {/* Mapeia os itens para opções no dropdown */}
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
