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
    </div>
  );
};

export default Contact;
