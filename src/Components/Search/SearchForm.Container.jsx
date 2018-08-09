// @flow
import { withFormik } from "formik";
import schema from "./SearchForm.ValidationSchema";
import { getHotels } from "../../API/hotels";
import { yearMonthDay, dayMonthYear } from "../../Utils/dateFormat";
import dateRangeBetween from "../../Utils/dateRangeBetween";

export default withFormik({
  initialValues: { dateFrom: "", dateTo: "" },
  mapPropsToValues: () => ({ dateFrom: "", dateTo: "" }),
  validationSchema: schema,
  handleBlur: () => {},
  handleSubmit: (
    { dateFrom, dateTo },
    {
      setErrors,
      setSubmitting,
      props: { history },
      /* setValues, setStatus, props, and other goodies */
    },
  ) => {
    getHotels()
      .then(({ data: { hotels } }) => {
        console.log(hotels);
        const currentRange = [yearMonthDay(dateFrom), yearMonthDay(dateTo)];
        const dateBetween = dateRangeBetween(currentRange);
        const filteredList = hotels.filter(({ availability }) =>
          availability
            .map(av => [dayMonthYear(av.from), dayMonthYear(av.to)])
            .some(dateBetween),
        );
        console.log(filteredList);
        setSubmitting(false);
        history.push("/dashboard", filteredList);
      })
      .catch(err => {
        console.log(err);
        setErrors({
          submission: "server can't be reached , please try again later",
        });
        setSubmitting(false);
      });
  },
});
