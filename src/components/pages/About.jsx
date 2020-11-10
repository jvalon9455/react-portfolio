import React from "react";
import { Link } from "react-router-dom";
import PortfolioPic from "../images/PortfolioPic.png"
import "./pages.css";


const About = () => {
  return (
    <>
      
      <div className="page-wrapper">
        <h1>About Me</h1>
        <div className="body-wrapper">
        <img id="PortfolioPic"src={PortfolioPic}></img>
       
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
      <div class="card fixed-bottom mt-5">
            <div class="card-header text-center">
                <span>&copy;2020 Copyright John Alonso</span>
                <br/>
                <a
              class="social-icon-link email"
              href="mailto:judeclark2019@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <i class="fas fa-envelope"></i>
            </a>
            <a
              class="social-icon-link github"
              href="https://github.com/judeclark19"
              target="_blank"
              aria-label="GitHub"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://www.linkedin.com/in/jude-clark-89262634/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
            </div>
          </div>
      </div>
    </>
  );
};

export default About;
