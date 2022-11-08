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
  onClick?: (val: boolean) => void;
};

const Checkbox: React.FC<Props> = ({
  name,
  label,
  value,
  checked,
  disabled,
  className = "",
  onClick = () => {},
}) => {
  const onChange = (e: any) => {
    onClick(e.target.checked);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          id={name}
          name={name}
          value={value}
          className={classNames(styles.checkbox, className)}
          onClick={onChange}
          disabled={disabled}
          defaultChecked={checked}
        />
      </div>

      <div>{!!label && <label htmlFor={name}>{label}</label>}</div>
    </div>
  );
};

export default Checkbox;
