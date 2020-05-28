import React from "react";
import NavigationItem from "../navigationItem/navigationItem";

const navigationItems = (props) => {
  return (
      <nav className="menu">
    <ul >
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/covid"> Covid19 </NavigationItem>
    </ul>
    </nav>
  );
};

export default navigationItems;
