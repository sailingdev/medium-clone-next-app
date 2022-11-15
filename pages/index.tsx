import React from "react";

import HomePage from "../components/_pages/Home";
import MainLayout from "../layout/MainLayout";
import axios from "../utils/functions/axios";

type Props = {
  blogData: IBlogData;
};

const Home = ({ blogData }: Props) => {
  console.log("blogData: ", blogData);

  return <HomePage blogData={blogData} />;
};

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

export async function getStaticProps() {
  const res = await axios().get(`${process.env.NEXT_PUBLIC_API_URL}/blog/all`);
  const blogData = res.data;
  return { props: { blogData }, revalidate: 10 };
}

export default Home;
