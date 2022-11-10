import React from "react";
import ResetPasswordPage from "../../components/_pages/Auth/ResetPassword";
import AuthLayout from "../../layout/AuthLayout";

const ResetPassword = () => <ResetPasswordPage />;

ResetPassword.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout authTitle="Reset Password">{page}</AuthLayout>;
};

export default ResetPassword;
