import React from "react";
import MainLayout from "../layout/MainLayout";

const About: React.FC = () => {
  return (
    <>
      <MainLayout
        title="homepage"
        description="this is homepage description"
        keywords="this is keywords"
      >
        <p>About Page</p>
      </MainLayout>
    </>
  );
};

export default About;
