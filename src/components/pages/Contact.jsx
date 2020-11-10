import React from "react";
import "./Contact.css";
import Resume from "../images/Resume.pdf";

const Contact = () => {
  return (
    <div className="container text-center pb-5">
      <h1>Contact</h1>

      <p> Let's connect!</p>
      <p>Please reach out to me below if you have any questions or concerns.</p>
      <p>Looking forward to hearing from you!</p>

      <div className="contact">
        <button>
          <a href="https://github.com/jvalon9455">
            <i className="github"></i> GitHub
          </a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/john-alonso-0487961a6/">
            <i className="linkedin"></i> LinkedIn
          </a>
        </button>
        <button>
          <a href="mailto:jvalon9455@gmail.com">
            <i className="Email"></i> Email
          </a>
        </button>
        <button className="resumeBtn">
          <a href={Resume}>
            <i className="resume"></i> Resume
          </a>
        </button>
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
  );
};

export default Contact;
