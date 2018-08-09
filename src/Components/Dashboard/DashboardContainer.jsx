// @flow
import React from "react";
import Dashboard from "./Dashboard.Container";
import renderer from "./Dashboard.View";

export default ({ location }: { location: any }) => (
  <Dashboard location={location}>{renderer}</Dashboard>
);
