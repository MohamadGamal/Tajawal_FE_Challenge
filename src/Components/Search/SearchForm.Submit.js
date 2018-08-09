// @flow
import { getHotels } from "../../API/hotels";
import { yearMonthDay, dayMonthYear } from "../../Utils/dateFormat";
import dateRangeBetween from "../../Utils/dateRangeBetween";
import NightsInDate from "../../Utils/nights";

export default (
  { dateFrom, dateTo }: { dateFrom: string, dateTo: string },
  {
    setErrors,
    setSubmitting,
    props: { history },
  }: { setErrors: Function, setSubmitting: Function, props: { history: any } },
) =>
  getHotels()
    .then(({ data: { hotels } }) => {
      const currentRange = [yearMonthDay(dateFrom), yearMonthDay(dateTo)];
      const dateBetween = dateRangeBetween(currentRange);
      const nights = NightsInDate(dateTo, dateFrom);
      const filteredList = hotels.filter(({ availability }) =>
        availability
          .map(av => [dayMonthYear(av.from), dayMonthYear(av.to)])
          .some(dateBetween),
      );

      setSubmitting(false);

      history.push("/dashboard", { hotels: filteredList, nights });
    })
    .catch(() => {
      setErrors({
        submission: "server can't be reached , please try again later",
      });
      setSubmitting(false);
    });
