import React from "react";

import HomePage from "../components/_pages/Home";
import MainLayout from "../layout/MainLayout";
import axios from "../utils/functions/axios";

type Props = {
  blogData: any;
};

const Home = ({ blogData }: Props) => {
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
  const res = await axios().get(
    `${process.env.NEXT_PUBLIC_API_URL}/blog/all?limit=8&pageNum=1`
  );
  const blogData = res.data.data;
  return { props: { blogData }, revalidate: 10 };
}

export default Home;
