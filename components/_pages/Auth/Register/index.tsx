import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../../_ui/Button";
import Input from "../../../_ui/Input";
import PhoneInputField from "../../../_ui/PhoneInput";
import styles from "./styles.module.scss";
import { RegisterSchema } from "../../../../utils/schema/registerSchema";
import { registerUser } from "../../../../utils/restApi/registerUser";

const RegisterPage: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<String>();

  const onSubmit = async (data: any) => {
    setIsPending(true);
    setError(undefined);
    try {
      await registerUser(data);
      router.push("/auth/login");
    } catch (error: any) {
      setError(error.message);
    }
    setIsPending(false);
  };

  return (
    <section>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.nameSet}>
          <Input
            name="firstname"
            type="text"
            label="FirstName*"
            register={register("firstname")}
            error={errors.firstName}
          />
          <Input
            name="lastname"
            type="text"
            label="LastName*"
            register={register("lastname")}
            error={errors.lastName}
          />
        </div>
        <Input
          name="email"
          type="email"
          label="Email address*"
          register={register("email")}
          error={errors.email}
        />
        <PhoneInputField control={control} name="phone" label="Phone number" />
        <Input
          name="password"
          type="password"
          label="Password*"
          register={register("password")}
          error={errors.password}
        />
        <Input
          name="passwordConfirm"
          type="password"
          label="Password Confirm*"
          register={register("passwordConfirm")}
          error={errors.passwordConfirm}
        />
        <div className={styles.linkWrapper}>
          {!!error && <p className={styles.error}>{error}</p>}
          <Button type="submit" isPending={isPending} disabled={isPending} fullWidth>
            Register
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

export default RegisterPage;
