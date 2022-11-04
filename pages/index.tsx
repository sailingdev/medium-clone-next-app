import React from "react";

import HomePage from "../components/_pages/Home";
import MainLayout from "../layout/MainLayout";

const Home: React.FC = () => {
  return (
    <>
      <MainLayout
        title="homepage"
        description="this is homepage description"
        keywords="this is keywords"
      >
        <HomePage />
      </MainLayout>
    </>
  );
};

export default Home;
