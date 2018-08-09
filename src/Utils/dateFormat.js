import moment from "moment";
import { curryN, flip, compose } from "ramda";

const flipAndCurry2 = compose(
  flip,
  curryN(2),
);

export const dayMonthYear = flipAndCurry2(moment)("DD-MM-YYYY");
export const yearMonthDay = moment;
