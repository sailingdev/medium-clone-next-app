import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../_ui/Button";
import Input from "../../../_ui/Input";

import styles from "./styles.module.scss";
import { ResetPasswordSchema } from "../../../../utils/schema/resetPasswordSchema";
import Link from "next/link";

const ResetPasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ResetPasswordSchema) });

  const [isLogging, setIsLogging] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data);
    setIsLogging(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_APP_API_URL}/auth/reset-password`,
        data
      );
      setIsLogging(false);
    } catch (error: any) {
      setIsLogging(false);
      // console.log(error);
    }
  };
  return (
    <div>
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
          <Button type="submit" isPending={isLogging} disabled={isLogging}>
            Send email
          </Button>
          <div>
            <Link href="/auth/login" className={styles.link}>
              Back to Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
