import React from "react";
import { shallow /* mount */ } from "enzyme";
import DashboardContainer from "../DashboardContainer";

// import SeacrchFormContainer from './SearchForm.Container';
// import SearchformView from './SearchForm.View';

describe("DashboardContainer Rendering", () => {
  it("should render correctly ", () => {
    const component = shallow(<DashboardContainer />);

    expect(component).toMatchSnapshot();
  });
});
