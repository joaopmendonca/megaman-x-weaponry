import React from "react";
import Logo from "../Logo";
import CustomTextButton from "../CustomTextButton";
import "./index.css";
import "../../fonts.css";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <Logo size="160px" /> {/* Define o tamanho como 100px */}
        <nav>
          <ul className="headerMenu">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/">
              <li>Weaponry</li>
            </a>
            <a href="/">
              <li>Add New Weapon</li>
            </a>
          </ul>
        </nav>
        <CustomTextButton buttonText="Login" backgroundColor="#2979FF" />
      </div>
    </div>
  );
}

export default Header;
