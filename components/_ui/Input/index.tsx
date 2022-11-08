import classNames from "classnames";
import React from "react";
import { FieldError } from "react-hook-form";

import styles from "./styles.module.scss";

type Props = {
  label?: string;
  name: string;
  type: string;
  className?: string;
  required?: boolean;
  register?: any;
  autoComplete?: string;
  placeholder?: string;
  error?: FieldError | any;
  value?: string;
  readonly?: boolean;
  ref?: any;
};

const Input: React.FC<Props> = ({
  label,
  name,
  type,
  className = "",
  required = false,
  register = {},
  placeholder,
  autoComplete,
  error,
  value,
  readonly = false,
  ref,
}) => (
  <div>
    <div className="mt-1">
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className={classNames(styles.inputStyle, className, { [styles.error]: error })}
        value={value}
        readOnly={readonly}
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
