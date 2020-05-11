import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "../sass/main.scss";

class Header extends Component {
  render() {
    let navContent;
    const { pathname } = this.props.location;

    if (pathname === "/404") {
      navContent = <div></div>;
    } else {
      navContent = (
        <ul className="header__nav">
          <Link to="/" className="header__nav--white">
            <li>Ride</li>
          </Link>
          <Link to="/landing2" className="header__nav--white">
            <li>Prices</li>
          </Link>
          <Link to="/landing3" className="header__nav--norm">
            <li>Navigate</li>
          </Link>
          <Link to="/landing4" className="header__nav--norm">
            <li>Contact</li>
          </Link>
        </ul>
      );
    }

    return (
      <div className="header">
        <div className="header__logo">
          <span className="logo__img"></span>
          <span className="logo__text">
            <span className="logo__text--green">Go</span> cab
          </span>
        </div>
        {navContent}
      </div>
    );
  }
}

export default withRouter(Header);
