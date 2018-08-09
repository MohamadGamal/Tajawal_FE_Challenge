import moment from "moment";

export default (date1, date2) => {
  const date1Moment = moment(date1);
  const date2Moment = moment(date2);

  return date1Moment.diff(date2Moment, "days");
};
