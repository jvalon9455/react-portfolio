import React from "react";
import Cards from "./Cards";
import "./Cards.css";
import EmployeeDirectory from "../images/EmployeeDirectory.png";
import FitnessTracker from "../images/FitnessTracker.png";
import JustDocIt from "../images/JustDocIt.png";
import MyTeam from "../images/MyTeam.png";
import TonedTribe from "../images/TonedTribe.png";
import Workday from "../images/Workday.png";

const CardsContainer = () => {
  return (
    <div className="cards">
    <h1>Portfolio</h1>
    <div className="cards-container">
        <div className="cards-wrapper">
            <ul className="cards-items">
            <Cards
            src={EmployeeDirectory}
            deployed="https://jvalon9455.github.io/employee-directory/"
            github="https://github.com/jvalon9455/employee-directory"
            />
            <Cards
            src={FitnessTracker}
            deployed="https://i-like-to-move-it.herokuapp.com/?id=5f93277aea86d2194c05d65d"
            github="https://github.com/jvalon9455/Workout-Tracker"
            />
            <Cards
            src={JustDocIt}
            deployed="http://www.just-doc-it.com"
            github="https://github.com/jvalon9455/Just-Doc-It"
            />
            </ul>
            <ul className="cards-items">
            <Cards
            src={MyTeam}
            deployed="https://github.com/jvalon9455/Team-Generator"
            github="https://github.com/jvalon9455/Team-Generator"
            />
            <Cards
            src={TonedTribe}
            deployed="https://napica.github.io/Project-1/"
            github="https://github.com/jvalon9455/Project-1"
            />
            <Cards
            src={Workday}
            deployed="https://jvalon9455.github.io/Work_Day_Scheduler/"
            github="hthttps://github.com/jvalon9455/Work_Day_Scheduler"
            />
            </ul>

        </div>

    </div>
</div>
  );
};

export default CardsContainer;
