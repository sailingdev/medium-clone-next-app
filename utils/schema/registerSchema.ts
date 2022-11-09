import * as yup from "yup";

export const RegisterSchema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    password: yup
      .string()
      .min(8, "The entered password is too short.")
      .max(50, "The entered password is too long.")
      .required("Password is a required field"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Password is not matched."),
    firstname: yup.string().required("FirstName is a required field"),
    lastname: yup.string().required("LastName is a required field"),
  })
  .required();
