import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

type Props = {
  name?: string;
  label?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  register?: any;
};

const Checkbox: React.FC<Props> = ({
  name,
  label,
  value,
  checked,
  disabled,
  className = "",
  register = {},
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          id={name}
          name={name}
          value={value}
          className={classNames(styles.checkbox, className)}
          disabled={disabled}
          defaultChecked={checked}
          {...register}
        />
      </div>

      <div>{!!label && <label htmlFor={name}>{label}</label>}</div>
    </div>
  );
};

export default Checkbox;
