import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={""}>
      <li>
        <NavLink activeClassName={""} className={""} exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={""} className={""} exact to="/contacts">
          Phonebook
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={""} className={""} to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={""} className={""} to="/register">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
