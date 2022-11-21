import classNames from "classnames";
import React from "react";
import { FieldError } from "react-hook-form";

import styles from "./styles.module.scss";

type Props = {
  label?: string;
  name: string;
  type: string;
  className?: string;
  register?: any;
  autoComplete?: string;
  placeholder?: string;
  error?: FieldError | any;
  value?: string;
  readonly?: boolean;
  autoFocus?: boolean;
  inputStyle?: "default" | "profile";
  defaultValue?: string;
};

const Input: React.FC<Props> = ({
  label,
  name,
  type,
  className = "",
  register = {},
  placeholder,
  autoComplete,
  error,
  value,
  readonly = false,
  autoFocus = false,
  inputStyle = "default",
  defaultValue,
}) => (
  <div>
    <div className="mt-1">
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        defaultValue={defaultValue}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={classNames(styles.inputStyle, styles[inputStyle], className, {
          [styles.error]: error,
        })}
        value={value}
        readOnly={readonly}
        autoFocus={autoFocus}
        {...register}
      />
    </div>
    {error ? (
      <div className="flex-1">
        <p className={styles.error}>{error.message}</p>
      </div>
    ) : null}
  </div>
);

export default Input;
