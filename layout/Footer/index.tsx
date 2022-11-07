import React from "react";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <p className={styles.text}>&copy; 2022 TimeTravel.LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
