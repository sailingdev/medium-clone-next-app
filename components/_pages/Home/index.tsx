import React from "react";

import BlogCard from "../../_ui/BlogCard";
import styles from "./styles.module.scss";
import image1 from "../../../assets/image/img1.png";
import image2 from "../../../assets/image/img2.jpg";
import image3 from "../../../assets/image/img3.jpg";

const blogList = [
  {
    image: image1,
    category: "Space Station Research.",
    title: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    image: image2,
    category: "Space Station Research.",
    title: "NASA Celebrates Native American Heritage Month in November.",
    className: "lg:col-span-2",
  },
  {
    image: image3,
    category: "Space Station Research.",
    title: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    image: image2,
    category: "Space Station Research.",
    title: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    image: image3,
    category: "Space Station Research.",
    title: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    image: image1,
    category: "Space Station Research.",
    title: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    image: image1,
    category: "Space Station Research.",
    title: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    image: image1,
    category: "Space Station Research.",
    title: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    image: image1,
    category: "Space Station Research.",
    title: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    image: image1,
    category: "Space Station Research.",
    title: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    image: image1,
    category: "Space Station Research.",
    title: "NASA Celebrates Native American Heritage Month in November.",
  },
];

const HomePage: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.blogWrapper}>
        {blogList.map((item, index) => (
          <BlogCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
