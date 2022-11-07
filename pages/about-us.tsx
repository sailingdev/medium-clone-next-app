import React from "react";

import AboutPage from "../components/_pages/About";
import MainLayout from "../layout/MainLayout";

const About = () => {
  return <AboutPage />;
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout
      title="Home"
      description="this is homepage description"
      keywords="this is keywords"
    >
      {page}
    </MainLayout>
  );
};

export default About;
