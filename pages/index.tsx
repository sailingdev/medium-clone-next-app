import React from "react";

import HomePage from "../components/_pages/Home";
import MainLayout from "../layout/MainLayout";

const Home = () => <HomePage />;

Home.getLayout = function getLayout(page: React.ReactElement) {
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

export default Home;
