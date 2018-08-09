import React from "react";
import axios from "axios";
import { shallow /* mount */ } from "enzyme";
import SearchContainer from "../SearchContainer";
import SearchFormSubmit from "../SearchForm.Submit";
import hotelData from "./hotelData";
// import SeacrchFormContainer from './SearchForm.Container';
// import SearchformView from './SearchForm.View';
jest.mock("axios");

describe("SearchContainer Rendering", () => {
  it("should render correctly ", () => {
    const component = shallow(<SearchContainer />);

    expect(component).toMatchSnapshot();
  });
});

describe("Search function ", () => {
  it("should push to the next screen correctly ", () => {
    axios.get.mockResolvedValueOnce({ data: hotelData });

    const setErrors = jest.fn();
    const setSubmitting = jest.fn();
    const history = { push: jest.fn() };

    return SearchFormSubmit(
      { dateFrom: "2020-10-10", dateTo: "2020-10-15" },
      {
        setErrors,
        setSubmitting,
        props: { history },
      },
    ).then(() => {
      expect(setSubmitting.mock.calls.length).toBe(1);
      expect(setErrors.mock.calls.length).toBe(0);
      expect(history.push.mock.calls.length).toBe(1);
    });
  });
  it("call setErrors when it encounter an error ", () => {
    axios.get.mockRejectedValueOnce({});

    const setErrors = jest.fn();
    const setSubmitting = jest.fn();
    const history = { push: jest.fn() };

    return SearchFormSubmit(
      { dateFrom: "2020-10-10", dateTo: "2020-10-15" },
      {
        setErrors,
        setSubmitting,
        props: { history },
      },
    ).then(() => {
      expect(setSubmitting.mock.calls.length).toBe(1);
      expect(setErrors.mock.calls.length).toBe(1);
      expect(history.push.mock.calls.length).toBe(0);
    });
  });
});
