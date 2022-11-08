import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type Props = {
  label?: string;
  name?: string;
  type?: string;
  className?: string;
  required?: boolean;
  register?: any;
  autoComplete?: string;
  placeholder?: string;
  error?: any;
  value?: string;
  readonly?: boolean;
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
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className={classNames(styles.inputStyle, className)}
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
