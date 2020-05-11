import React from "react";
import { Link } from "react-router-dom";

import "../sass/main.scss";

export default function Page404() {
  return (
    <div className="page404">
      <div className="page404__content">
        <h1 className="page404__content--header">
          <span className="page404__number">4</span>
          <img
            src="/../../images/virus2.png"
            className="page404__image"
            alt="virus"
          />
          <span className="page404__number">4</span>
        </h1>
        <p className="page404__content--text">
          This page doesn’t exist, cant exist and will <br /> never exist
          because you have refused to <br />
          save lives
        </p>
        <Link to="/" className="page404__content--btn">
          &larr; STAY AT HOME
        </Link>
      </div>
    </div>
  );
}
