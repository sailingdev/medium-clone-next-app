import React from "react";
import { ToastContainer } from "react-toast";

import Footer from "../Footer";
import Header from "../Header";
import PageMeta from "../PageMeta";

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
    <>
      <PageMeta title={title} description={description} keywords={keywords} url={url} />

      <ToastContainer delay={6000} position="top-left" />
      <Header />
      <div className="text-black bg-white">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
