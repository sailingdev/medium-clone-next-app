import React from "react";

import axios from "../../utils/functions/axios";
import DetailPage from "../../components/_pages/Detail";
import MainLayout from "../../layout/MainLayout";

const Blog = () => <DetailPage />;

Blog.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout
      title="Detail"
      description="this is detailed page description"
      keywords="this is keywords"
    >
      {page}
    </MainLayout>
  );
};

export default Blog;
