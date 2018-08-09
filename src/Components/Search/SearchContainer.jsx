// @flow
import React from "react";
import SearchFormView from "./SearchForm.View";
import SearchFormContainer from "./SearchForm.Container";

const SearchForm = SearchFormContainer(SearchFormView);
export default ({ history }: { history: any }) => (
  <SearchForm history={history} />
);
