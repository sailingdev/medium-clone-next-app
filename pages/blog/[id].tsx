import React from "react";

import BlogPage from "../../components/_pages/Blog";
import MainLayout from "../../layout/MainLayout";

const Blog = () => <BlogPage />;

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
