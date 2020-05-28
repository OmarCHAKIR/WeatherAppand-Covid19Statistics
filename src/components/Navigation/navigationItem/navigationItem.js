import React from "react";
import {NavLink} from 'react-router-dom'

const navigationItem = (props) => {
  return (
    <li>
      <NavLink className="navLink" exact to={props.link}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
