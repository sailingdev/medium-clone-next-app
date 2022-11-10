import React from "react";
import RegisterPage from "../../components/_pages/Auth/Register";
import AuthLayout from "../../layout/AuthLayout";

const Register = () => <RegisterPage />;

Register.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout authTitle="Register to your account">{page}</AuthLayout>;
};

export default Register;
