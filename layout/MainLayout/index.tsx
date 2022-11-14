import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import PageMeta from "../PageMeta";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  description?: string;
  keywords?: string;
  title?: string;
  url?: string;
};

const MainLayout: React.FC<Props> = ({
  children,
  description = "",
  keywords = "",
  title = "",
  url = "",
}) => {
  return (
    <div className={styles.wrapper}>
      <PageMeta title={title} description={description} keywords={keywords} url={url} />

      <Header />
      <div className={styles.mainWrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
