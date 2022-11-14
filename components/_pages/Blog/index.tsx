import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import AddComment from "../../_ui/AddComment";
import styles from "./styles.module.scss";
import { blogList } from "../Home";

const BlogPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogList.find((item) => item.id === id);
  return (
    <section>
      {!!blog && (
        <div className={styles.blog}>
          <Image src={blog.image} alt="image" className={styles.image} />
          <div className={styles.blogWrapper}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.description}>{blog.description}</p>
            <div className={styles.authorWrapper}>
              <Image src={blog.avatar} alt="no avatar" className={styles.avatar} />
              <p>
                Blog post by
                <span className={styles.authorText}> Anna Agnihotri</span>- Published at{" "}
                {new Date().toLocaleString()}
              </p>
            </div>
            <div className={styles.descriptionWrapper}>
              <p className={styles.content}>{blog.overview}</p>
              <Image src={blog.image} alt="no image" className={styles.blogImage} />
              <p className={styles.content}>{blog.content}</p>
            </div>
            <hr className={styles.line} />

            <div className={styles.comment}>
              <AddComment avatar={blog.avatar} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogPage;
