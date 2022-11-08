import classNames from "classnames";
import React, { ReactNode } from "react";

import styles from "./styles.module.scss";

type Props = {
  type?: "submit" | "button" | "reset";
  buttonStyle?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isPending?: boolean;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  type,
  buttonStyle = "primary",
  className = "",
  children,
  onClick = () => {},
  isPending = false,
  disabled = false,
}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classNames(className, styles.buttonStyle, styles[buttonStyle])}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
