import React from 'react';
import Cards from "./Cards"
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
                    text="This app shows the contact information of all the employees. You can sort and filter by their first name."
                    deployed="https://jvalon9455.github.io/employee-directory/"
                    github="https://github.com/jvalon9455/employee-directory"
                    />
                    <Cards
                    src={FitnessTracker}
                    text="This app shows the contact information of all the employees. You can sort and filter by their first name."
                    deployed="https://jvalon9455.github.io/employee-directory/"
                    github="https://github.com/jvalon9455/employee-directory"
                    />
                    <Cards
                    src={JustDocIt}
                    text="This app shows the contact information of all the employees. You can sort and filter by their first name."
                    deployed="https://jvalon9455.github.io/employee-directory/"
                    github="https://github.com/jvalon9455/employee-directory"
                    />
                    </ul>
                    <ul className="cards-items">
                    <Cards
                    src={MyTeam}
                    text="This app shows the contact information of all the employees. You can sort and filter by their first name."
                    deployed="https://jvalon9455.github.io/employee-directory/"
                    github="https://github.com/jvalon9455/employee-directory"
                    />
                    <Cards
                    src={TonedTribe}
                    text="This app shows the contact information of all the employees. You can sort and filter by their first name."
                    deployed="https://jvalon9455.github.io/employee-directory/"
                    github="https://github.com/jvalon9455/employee-directory"
                    />
                    <Cards
                    src={Workday}
                    text="This app shows the contact information of all the employees. You can sort and filter by their first name."
                    deployed="https://jvalon9455.github.io/employee-directory/"
                    github="https://github.com/jvalon9455/employee-directory"
                    />
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default CardsContainer;