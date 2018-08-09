import { curry } from "ramda";

export default curry(
  ([mainDateFrom, mainDateTo], [comparedDateFrom, compareDateTo]) => {
    console.log(mainDateFrom, comparedDateFrom);
    if (
      mainDateFrom.isSameOrAfter(comparedDateFrom) &&
      mainDateTo.isSameOrBefore(compareDateTo)
    )
      return true;
    return false;
  },
);
