import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../../_ui/Button";
import Checkbox from "../../../_ui/Checkbox";
import Input from "../../../_ui/Input";
import styles from "./styles.module.scss";
import { LoginSchema } from "../../../../utils/schema/loginSchema";

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const [isLogging, setIsLogging] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data);
    setIsLogging(true);
    try {
      const res = await axios.post(`${process.env.NEXT_APP_API_URL}/auth/login`, data);
      setIsLogging(false);
    } catch (error: any) {
      setIsLogging(false);
      // console.log(error);
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
        <Input
          name="password"
          type="password"
          label="Password"
          autoComplete="password"
          register={register("password")}
          error={errors.password}
        />
        <div className={styles.refWrapper}>
          <div className={styles.checkboxWrapper}>
            <Checkbox label="Remember me" />
          </div>
          <Link href="#" className={styles.link}>
            Forgot your password?
          </Link>
        </div>
        <Button type="submit" isPending={isLogging} disabled={isLogging}>
          Sign in
        </Button>
        <div className={styles.linkWrapper}>
          <Link
            href="/auth/register"
            className={styles.link}
          >{`Don't have a user account yet?`}</Link>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
