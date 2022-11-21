import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller } from "react-hook-form";
import styles from "./styles.module.scss";
import classNames from "classnames";

type Props = {
  control: any;
  name: string;
  label?: string;
  className?: string;
  defaultValue?: string;
  country?: string;
  regions?: string[];
  inputStyle?: "default" | "profile";
};

const PhoneInputField: React.FC<Props> = ({
  control,
  name,
  label,
  defaultValue,
  country = "us",
  regions = ["america", "europe", "asia", "oceania", "africa"],
  className,
  inputStyle = "default",
}) => {
  return (
    <div className={className}>
      {label ? (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      ) : null}
      <div className="mt-1">
        <Controller
          control={control}
          name={name}
          defaultValue={defaultValue}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <PhoneInput
                regions={regions}
                country={country}
                value={value}
                onChange={onChange}
                inputProps={{ name }}
                inputClass={classNames(styles.inputStyle, styles[inputStyle])}
                buttonClass={styles.countryPicker}
              />
              {error ? (
                <div className="flex-1">
                  <p className={styles.error}>{error.message}</p>
                </div>
              ) : null}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PhoneInputField;
