import React from "react";
import { Link } from "react-router-dom";
import PortfolioPic from "../images/PortfolioPic.png"


const About = () => {
  return (
    <>
      
      <div className="body-wrapper">
        
        <img src={PortfolioPic}></img>
       
        <p>
          My name is John Alonso, but I go by Jimmy. I am a full-time Athletic
          Trainer at Southland Academy, part-time personal trainer at Evolve
          Fitness and a full-stack development student at Georgia Tech.
        </p>
        <p>
          I graduated with a Bachelor's of Science in Athletic Training from the
          University of North Georgia. From there I got to experience all levels
          of sport including an internship with the Atlanta Falcons.
        </p>
        <p>
          When the world stopped due to the pandemic, I felt like I needed to be
          proactive and turned to the tech industry. I still have a lot to
          learn, but I'm excited and proud of all the strides I've made.
        </p>
        <p>
          Other interests include supporting Liverpool FC, all professional
          Georgia sports teams (even though it's a hard relationship) and being
          active.
        </p>
      </div>
    </>
  );
};

export default About;
