// @flow
import { withFormik } from "formik";
import schema from "./SearchForm.ValidationSchema";
import Submit from "./SearchForm.Submit";

export default withFormik({
  initialValues: { dateFrom: "", dateTo: "" },
  mapPropsToValues: () => ({ dateFrom: "", dateTo: "" }),
  validationSchema: schema,
  handleBlur: () => {},
  handleSubmit: Submit,
});
