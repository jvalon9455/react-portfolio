import React from 'react';
import CardsContainer from "../Cards/CardsContainer"

const Portfolio = () => {
    return (
        <div>
            <CardsContainer />
            <div class="card fixed-bottom mt-5">
            <div class="card-header text-center">
                <span>&copy;2020 Copyright John Alonso</span>
                <br/>
                <a
              class="social-icon-link email"
              href="mailto:jvalon9455@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <i class="fas fa-envelope"></i>
            </a>
            <a
              class="social-icon-link github"
              href="https://github.com/jvalon9455"
              target="_blank"
              aria-label="GitHub"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://www.linkedin.com/in/john-alonso-0487961a6/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
            </div>
          </div>
        </div>
        
    );
};

export default Portfolio;