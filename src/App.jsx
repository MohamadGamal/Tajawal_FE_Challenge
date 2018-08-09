// @flow
import React from "react";
import { hot } from "react-hot-loader";

// import Footer from "./components/Footer";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "semantic-ui-css/semantic.min.css";

const App = () => (
  <BrowserRouter>
    {/* <Header /> */}
    <Routes />

    {/* <Footer /> */}
  </BrowserRouter>
);
export default hot(module)(App);
