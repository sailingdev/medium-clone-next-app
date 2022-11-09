import React from "react";
import LoginPage from "../../components/_pages/Auth/Login";
import AuthLayout from "../../layout/AuthLayout";

const Login = () => <LoginPage />;

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout AuthTitle="Sign in to your account">{page}</AuthLayout>;
};

export default Login;
