import React from "react";

import mernLogo from "../images/MERN.jpeg";

const Hero = () => (
  <div className="text-center hero">
    <h1 className="mb-4">Expense Tracker</h1>
    <p className="lead">
      This is a simple multiuser Expense Tracking Web Application built using
      MERN Stack(MongoDb, Express, React, NodeJs) using{" "}
      <a
        href="https://www.npmjs.com/package/auth0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Auth0
      </a>{" "}
      library for secure Login, Sign Up and Authentificaton.
      {"\n"}
      <div className="mern-pic-css">
        <img src={mernLogo} alt="MERN pic" />
      </div>
    </p>
    <hr />
    <div className="note-for-users" style={{whiteSpace: 'nowrap'}}>
      Bugs can be reported at
      <div className="env-wrap">
        <i className="fa fa-fw fa-envelope"></i>
        <div className="email-info">sourav.cse19@chitkarauniversity.edu.in</div>
      </div>
    </div>
    {"\n"}
  </div>
);

export default Hero;
