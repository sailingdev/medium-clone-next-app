import * as yup from "yup";

export const LoginSchema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    password: yup
      .string()
      .min(8, "The entered password is too short.")
      .max(50, "The entered password is too long.")
      .required("Password number is a required field"),
  })
  .required();
