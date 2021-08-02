import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const styles = {
    color: "black",
    fontSize: "1.5em",
  };

  const defaultStyle = {
    padding: "0.6rem 1rem",
    borderBottom: "3px solid #000000b1",
    display: "flex",
    justifyContent: "space-evenly",
  };

  const textDecoration = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <div className="navbar" style={defaultStyle}>
      <NavLink to="/" activeStyle={styles} exact style={textDecoration}>
        Home
      </NavLink>
      <NavLink to="/directors" activeStyle={styles} style={textDecoration}>
        Directors
      </NavLink>
      <NavLink to="/actors" activeStyle={styles} style={textDecoration}>
        Actors
      </NavLink>
      <NavLink to="/movies" activeStyle={styles} style={textDecoration}>
        Movies
      </NavLink>
    </div>
  );
}

export default NavBar;
