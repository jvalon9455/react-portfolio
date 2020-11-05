import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Cards.css";

const Cards = (props) => {
  return (
    <li className="cards-item">
      <div className="whole-card">
        <img className="card-image" src={props.src} />
        <div className="card-text">{props.text}</div>
        <div className="card-btn">
          <a href={props.deployed}>
            <Button>Deployed App</Button>
          </a>
          <a href={props.github}>
            <Button buttonStyle="btn--outline">Github Repo</Button>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Cards;
