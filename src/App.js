import React from "react";
import "./sass/main.scss";

//router
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Layer from "./components/Layer";
import LandingPage1 from "./components/maincontent/LandingPage1";
import LandingPage2 from "./components/maincontent/LandingPage2";
import LandingPage3 from "./components/maincontent/LandingPage3";
import LandingPage4 from "./components/maincontent/LandingPage4";
import Page404 from "./components/404";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Layer />
        <Route exact path="/" component={LandingPage1} />
        <Route exact path="/landing2" component={LandingPage2} />
        <Route exact path="/landing3" component={LandingPage3} />
        <Route exact path="/landing4" component={LandingPage4} />
        <Route exact path="/404" component={Page404} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
