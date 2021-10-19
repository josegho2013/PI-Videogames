import React from "react";
// import { Link } from "react-router-dom";
import { GiGecko } from "react-icons/gi";
import "./Styles/FooterStyle.css";

function Footer() {
  return (
    <div className="footer_container">
      <h1>
        {" "}
        <GiGecko size="3rem" />
        MANGO <br />
        GAMES
      </h1>
      <h1>Proyecto Individual</h1>
      <div>
        <h1>Realizado por:</h1>
        <h1>José Hernández</h1>
      </div>
    </div>
  );
}

export default Footer;
