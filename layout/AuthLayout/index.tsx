import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { authSelector } from "../../store/Auth";
import logoImage from "../../assets/image/logo.png";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  AuthTitle?: string;
};

const LoginPage: React.FC<Props> = ({ children, AuthTitle }) => {
  const { isLoggedIn } = useSelector(authSelector);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.mainWrapper}>
          <div className={styles.logoWrapper}>
            <Link href="/">
              <Image src={logoImage} alt="no Image" className={styles.image} />
            </Link>
            <h2 className={styles.logoText}>{AuthTitle}</h2>
          </div>
          <div className={styles.subWrapper}>
            <div className={styles.formWrapper}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
