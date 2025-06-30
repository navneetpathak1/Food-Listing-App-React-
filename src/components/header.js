import { useState } from "react";
import { LogoURL } from "../constant";
import {Link} from "react-router-dom";

export const Header = () => {

  const [logState, setLogState] = useState("Login");

  return (
    <div className="header">
      <a href="/">
        <img
          src = {LogoURL}
          alt="logo"
          className="logo"
        />
      </a>
      <ul className="nav-list">
        <li className="nav-item"> <Link to="/">Home</Link> </li>
        <li className="nav-item"> <Link to="/about">Details</Link> </li>
        <li className="nav-item"> <Link to="/contact">Contact Us</Link> </li>
        <li className="nav-item"> <Link to="/card">Card</Link> </li>
        <button className="nav-item" onClick={()=>{
          logState === "Login"? setLogState("Logout"): setLogState("Login")
        }}>{logState}</button>
      </ul>
    </div>
  );
};