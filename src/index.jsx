// @flow
import React from "react";
import { render } from "react-dom";
import App from "./App";

const renderAppRoot = () => {
  render(<App />, document.getElementById("root"));
};

renderAppRoot();

export default renderAppRoot;
