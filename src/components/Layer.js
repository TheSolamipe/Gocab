import React from "react";
import "../sass/main.scss";
import { withRouter } from "react-router-dom";

class Layer extends React.Component {
  render() {
    let layerContent;
    const { pathname } = this.props.location;

    if (pathname === "/404") {
      layerContent = <div></div>;
    } else {
      layerContent = <div className="layer__green"></div>;
    }

    return (
      <div className="layer">
        <div className="layer__white"></div>
        {layerContent}
      </div>
    );
  }
}

export default withRouter(Layer);
