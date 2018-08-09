import { curry } from "ramda";

export default curry(
  ([mainDateFrom, mainDateTo], [comparedDateFrom, compareDateTo]) => {
    if (
      mainDateFrom.isSameOrAfter(comparedDateFrom) &&
      mainDateTo.isSameOrBefore(compareDateTo)
    )
      return true;
    return false;
  },
);
