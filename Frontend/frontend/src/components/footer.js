import React from "react";
import logo from "../images/coding-footer.png";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <p>
      <div className="main-logo-footer">
        <img src={logo} alt="logo" />
      </div>
      Expense Tracker By{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/lulzsec14"
      >
        Sourav
      </a>
    </p>
    <div>
      <ul className="socialIcons">
        <li className="github">
          <a rel="noopener noreferrer" href="https://github.com/lulzsec14" target="_blank">
            <i className="fa fa-fw fa-github"></i>GitHub
          </a>
        </li>
        <li className="linkedin">
          <a rel="noopener noreferrer" href="https://www.linkedin.com/in/sourav-singh-5aa882195/" target="_blank">
            <i className="fa fa-fw fa-linkedin"></i>LinkedIn
          </a>
        </li>
        {/* <li className="instagram">
          <a href="https://www.instagram.com/__lulzsec___/">
            <i className="fa fa-fw fa-instagram"></i>Instagram
          </a>
        </li> */}
      </ul>
    </div>
  </footer>
);

export default Footer;
