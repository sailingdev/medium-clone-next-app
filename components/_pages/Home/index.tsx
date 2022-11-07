import React from "react";

import BlogCard from "../../_ui/BlogCard";
import styles from "./styles.module.scss";
import image1 from "../../../assets/image/img1.png";
import image2 from "../../../assets/image/img2.jpg";
import image3 from "../../../assets/image/img3.jpg";

export const blogList = [
  {
    id: "1",
    image: image1,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    id: "2",
    image: image2,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
    className: "desktop:col-span-2",
  },
  {
    id: "3",
    image: image3,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    id: "4",
    image: image2,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    id: "5",
    image: image3,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    id: "6",
    image: image1,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    id: "7",
    image: image1,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    id: "8",
    image: image1,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    id: "9",
    image: image1,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    id: "10",
    image: image1,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
  },
  {
    id: "11",
    image: image1,
    title: "Space Station Research.",
    description: "NASA Celebrates Native American Heritage Month in November.",
  },
];

const HomePage: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.blogWrapper}>
        {blogList.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
