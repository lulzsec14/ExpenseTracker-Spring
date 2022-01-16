import React from "react";
import AuthenticationButton from "./authentication-button";
import { useAuth0 } from "@auth0/auth0-react";

const AuthNav = () => {
  const { isAuthenticated, user } = useAuth0();
  let greetsal;
  if (isAuthenticated) {
    const uname = user.name;
    if (uname) {
      greetsal = user.name;
      if (greetsal === "5018 SOURAV") {
        greetsal = "admin";
      }
    }
  }
  const greet = "Welcome " + greetsal;
  return (
    <div className="navbar-nav ml-auto">
      <span
        style={{
          paddingTop: "20px",
          marginRight: "15px",
          whiteSpace: "nowrap",
        }}
      >
        {isAuthenticated ? greet : ""}
      </span>
      <AuthenticationButton />
    </div>
  );
};

export default AuthNav;
