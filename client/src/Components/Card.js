import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import "./Styles/CardGame.css";

const Card = ({ id, name, background_image, genres, rating }) => {
  return (
    <Link to={`gameDetail/${id}`}>
      <div className="container">
        <span style={{display: "flex"}}>
          <AiOutlineStar />
          <p style={{margin: "0px"}}>{rating}</p>
        </span>
        {background_image ? (
          <img src={background_image} alt={id} />
        ) : (
          <h2>Opsss! This game don´t <br/>have a picture.</h2>
        )}
        <div className="dataRating">{name}</div>
        <div className="genres">
          {genres.map((g) => {
            return <li key={g.id}>{g.name}</li>;
          })}
        </div>
      </div>
    </Link>
  );
};

export default Card;
