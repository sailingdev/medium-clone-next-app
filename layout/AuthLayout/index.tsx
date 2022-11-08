import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";

import logoImage from "../../assets/image/logo.png";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const LoginPage: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainWrapper}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image src={logoImage} alt="no Image" className={styles.image} />
          </Link>
          <h2 className={styles.logoText}>{title}</h2>
        </div>
        <div className={styles.subWrapper}>
          <div className={styles.formWrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
