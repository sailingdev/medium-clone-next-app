import React from "react";

import AboutPage from "../components/_pages/About";
import MainLayout from "../layout/MainLayout";

const About = () => <AboutPage />;

About.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout
      title="About us"
      description="this is About page description"
      keywords="this is keywords"
    >
      {page}
    </MainLayout>
  );
};

export default About;
