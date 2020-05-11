import React from "react";
import "../../sass/main.scss";
import { Link } from "react-router-dom";

export default function LandingPage4() {
  return (
    <div className="landingPage">
      <div className="landingPage__content">
        <h1 className="landingPage__content--header">
          Top Notch
          <br /> Cars for as Low <br /> as #200
        </h1>
        <p className="landingPage__content--text">
          Go cab will take you anywhere in lagos is a <br />
          japanese car with the unique ability of flying <br />
          inside water jumping on air and wimming inside <br />
          water.
        </p>
        <Link to="/404" className="landingPage__content--btn">
          BOOK A CAB &rarr;
        </Link>
      </div>
      <img
        src="/../../images/car2.png"
        className="landingPage__image"
        alt="car4"
      />
      <div className="landingPage__slide">
        <Link to="/" className="landingPage__slide-item"></Link>
        <br />
        <Link to="/landing2" className="landingPage__slide-item"></Link>
        <br />
        <Link to="/landing3" className="landingPage__slide-item"></Link>
        <br />
        <Link to="/landing4" className="landingPage__slide-item"></Link>
        <br />
      </div>
    </div>
  );
}
