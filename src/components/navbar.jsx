import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavBarButtons from "./buttons.jsx";

export default function NavBar() {
  return (
    <div className="navigation">
    <nav className="nav-bar">
      <ul className="nav-container">
        <li className="title"> MeetGreet</li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#locations">Locations</a> </li>
        <li><NavBarButtons /></li>
      </ul>
    </nav>
    </div>
  )
}