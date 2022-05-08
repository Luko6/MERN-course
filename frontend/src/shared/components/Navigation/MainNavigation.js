import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

import "./MainNavigation.scss";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <MainHeader>
        {/* The mobile navigation did not work form the course, 
        but can be easily taken care of with bootstrap */}
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
