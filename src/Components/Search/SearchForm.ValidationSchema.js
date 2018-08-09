import { date, object, ref } from "yup";

export default object().shape({
  dateTo: date()
    .min(ref("dateFrom"))
    .required(),
  dateFrom: date().required(),
});
