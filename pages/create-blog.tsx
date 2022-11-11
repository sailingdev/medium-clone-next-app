import React from "react";
import CreateBlogPage from "../components/_pages/CreateBlog";
import MainLayout from "../layout/MainLayout";

const CreateBlog = () => <CreateBlogPage />;

CreateBlog.getLayout = function getLayout(page: React.ReactElement) {
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

export default CreateBlog;
