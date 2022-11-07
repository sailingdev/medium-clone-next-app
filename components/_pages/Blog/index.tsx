import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import { blogList } from "../Home";
import AddComment from "../../_ui/AddComment";

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
            <h1 className={styles.category}>{blog.category}</h1>
            <p className={styles.title}>{blog.title}</p>
            <div className={styles.authorWrapper}>
              <Image src={blog.avatar} alt="no avatar" className={styles.avatar} />
              <p>
                Blog post by
                <span> Anna Agnihotri</span>- Published at {new Date().toLocaleString()}
              </p>
            </div>
            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>
                {`NextJS is called 'The React Framework for Production'. `}
              </p>
              <p>
                Next.js gives us a better developer experience with all the features we
                need for production: hybrid static & server rendering, TypeScript support,
                smart bundling, route pre-fetching, and more.
              </p>
              <Image src={blog.image} alt="no image" className="w-full my-2" />
              <p className={styles.description}>
                Thankfully, less config is needed. All thanks to the amazing community of
                us developers NextJS is more popular than ever.
              </p>
            </div>
            <hr className="max-w-lg mx-auto my-20 border border-indigo-500" />

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
