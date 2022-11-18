import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { authSelector } from "../../store/Auth";
import logoImage from "../../assets/image/logo.png";
import styles from "./styles.module.scss";
import Container from "../../components/_ui/Container";

type Props = {
  children: React.ReactNode;
  authTitle?: string;
};

const LoginPage: React.FC<Props> = ({ children, authTitle }) => {
  const { userData } = useSelector(authSelector);
  const router = useRouter();

  useEffect(() => {
    if (userData) {
      router.replace("/");
    }
  }, [userData]);

  return (
    <>
      <Container className={styles.wrapper}>
        <div className={styles.mainWrapper}>
          <div className={styles.logoWrapper}>
            <Link href="/">
              <Image src={logoImage} alt="no Image" className={styles.image} />
            </Link>
            <h2 className={styles.logoText}>{authTitle}</h2>
          </div>
          <div className={styles.subWrapper}>
            <div className={styles.formWrapper}>{children}</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
