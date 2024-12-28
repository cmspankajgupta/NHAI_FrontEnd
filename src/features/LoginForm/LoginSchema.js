import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter Valid Number")
    .required("Mobile number is required")
});
