import React from "react";
import "../sass/main.scss";
import { withRouter } from "react-router-dom";

class Footer extends React.Component {
  render() {
    let footContent1;
    let footContent2;
    const { pathname } = this.props.location;

    if (pathname === "/404") {
      footContent1 = <div></div>;
      footContent2 = <div></div>;
    } else {
      footContent1 = (
        <div className="footer__1">
          <h1 className="footer-head">
            Mainland - island <span className="footer-green">&rarr;</span>
          </h1>
          <p className="footer-text">Promo Ends 5th May 2020</p>
          <span className="footer-price">#200</span>
        </div>
      );
      footContent2 = (
        <div className="footer__2">
          <h1 className="footer-head">
            Island - Mainland <span className="footer-green">&rarr;</span>
          </h1>
          <p className="footer-text">Promo Ends 5th May 2020</p>
          <span className="footer-price">#400</span>
        </div>
      );
    }

    return (
      <div className="footer">
        {footContent1}
        {footContent2}
        <div className="footer__icon">
          <img
            src="/../images/ig.png"
            className="footer__icon-img"
            alt="instagram"
          />
          <img
            src="/../images/fb.png"
            className="footer__icon-img"
            alt="facebook"
          />
          <img
            src="/../images/tw.png"
            className="footer__icon-img"
            alt="twitter"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
