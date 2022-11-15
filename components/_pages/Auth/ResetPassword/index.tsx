import React, { useState } from "react";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../../_ui/Button";
import Input from "../../../_ui/Input";
import axios from "../../../../utils/functions/axios";
import { ResetPasswordSchema } from "../../../../utils/schema/resetPasswordSchema";
import { useForm } from "react-hook-form";

import styles from "./styles.module.scss";

const ResetPasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ResetPasswordSchema) });

  const [isLogging, setIsLogging] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLogging(true);
    try {
      const res = await axios(true).post(
        `${process.env.NEXT_APP_API_URL}/auth/reset-password`,
        data
      );
      setIsLogging(false);
    } catch (error: any) {
      setIsLogging(false);
    }
  };

  return (
    <section>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          type="email"
          label="Email address"
          autoComplete="email"
          register={register("email")}
          error={errors.email}
        />

        <div className={styles.linkWrapper}>
          <Button type="submit" isPending={isLogging} disabled={isLogging} fullWidth>
            Send email
          </Button>
          <div>
            <Link href="/auth/login" className={styles.link}>
              Back to Login
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ResetPasswordPage;
