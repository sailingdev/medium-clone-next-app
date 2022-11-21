import React from "react";

import axios from "../../utils/functions/axios";
import DetailPage from "../../components/_pages/Detail";
import MainLayout from "../../layout/MainLayout";

export type BlogDetailPageProps = {
  blog: IBlogData;
};

const Blog = ({ blog }: BlogDetailPageProps) => {
  return <DetailPage blog={blog} />;
};

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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const res = await axios().get(`${process.env.NEXT_PUBLIC_API_URL}/blog/detail`, {
    data: {
      slug: params.slug,
    },
  });
  const blog = res.data;
  return { props: { blog }, revalidate: 10 };
}

export default Blog;
