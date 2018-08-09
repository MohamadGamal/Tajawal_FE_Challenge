// @flow
declare var document: {
  getElementById(element: string): Element,
};

declare type FormicViewType = {
  values: any,
  errors: any,
  touched: any,
  handleBlur: Function,
  handleChange: Function,
  handleSubmit: Function,
  isSubmitting: Function,
};

declare type HotelType = {
  price: Number,
};
