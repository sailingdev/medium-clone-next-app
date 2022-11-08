import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../../_ui/Button";
import Input from "../../../_ui/Input";
import PhoneInputField from "../../../_ui/PhoneInput";
import logoImage from "../../../../assets/image/logo.png";
import styles from "./styles.module.scss";
import { RegisterSchema } from "../../../../utils/schema/registerSchema";

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const [isLogging, setIsLogging] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data);
    setIsLogging(true);
    try {
      const res = await axios.post(`${process.env.NEXT_APP_API_URL}/auth/register`, data);
      setIsLogging(false);
    } catch (error: any) {
      console.log(error);
      setIsLogging(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.nameSet}>
        <Input
          name="firstName"
          type="text"
          label="FirstName*"
          register={register("firstName")}
          error={errors.firstName}
        />
        <Input
          name="lastName"
          type="text"
          label="LastName*"
          register={register("lastName")}
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
      <Button type="submit" isPending={isLogging} disabled={isLogging}>
        Register
      </Button>
    </form>
  );
};

export default RegisterPage;
