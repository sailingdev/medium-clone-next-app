import React, { ReactNode } from "react";
import ReactLoading from "react-loading";
import classNames from "classnames";

import styles from "./styles.module.scss";

type Props = {
  type?: "submit" | "button" | "reset";
  buttonStyle?: "primary" | "secondary" | "profile" | "white";
  className?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isPending?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

const Button: React.FC<Props> = ({
  type = "button",
  buttonStyle = "primary",
  className = "",
  children,
  onClick = () => {},
  isPending = false,
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classNames(className, styles.buttonStyle, styles[buttonStyle], {
          "w-full": fullWidth,
        })}
      >
        {isPending ? (
          <ReactLoading type="bars" width={24} height={24} color="white" />
        ) : (
          children
        )}
      </button>
    </div>
  );
};

export default Button;
