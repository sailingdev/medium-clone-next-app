import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import axios from "../../../utils/functions/axios";
import BlogCard from "../../_ui/BlogCard";
import styles from "./styles.module.scss";

type HomePageProps = {
  blogData: any;
};

const HomePage: React.FC<HomePageProps> = ({ blogData }) => {
  const [blogList, setBlogList] = useState(blogData);
  const [hashMore, setHashMore] = useState(true);

  const pageNum = blogList.length / 8 + 1;
  const getMoreBlogList = async () => {
    const res = await axios().get(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/all?limit=8&pageNum=${pageNum}`
    );
    const newBlogData = res.data.data;

    if (res.data?.lastPage) {
      setHashMore(false);
    }
    setBlogList((prev: any) => prev.concat(newBlogData));
  };

  return (
    <section className={styles.wrapper}>
      <InfiniteScroll
        dataLength={pageNum}
        next={getMoreBlogList}
        hasMore={hashMore}
        loader={<h3 className="text-center"> Loading...</h3>}
        endMessage={<h3 className="text-center">Nothing more to show</h3>}
      >
        <div className={styles.blogWrapper}>
          {blogList.map((item: IBlogData, index: number) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default HomePage;
