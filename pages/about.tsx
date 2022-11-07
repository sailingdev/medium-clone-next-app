import React from "react";

import AboutPage from "../components/_pages/About";
import MainLayout from "../layout/MainLayout";

const About: React.FC = () => {
  return (
    <>
      <MainLayout
        title="About"
        description="this is homepage description"
        keywords="this is keywords"
      >
        <AboutPage />
      </MainLayout>
    </>
  );
};

export default About;
