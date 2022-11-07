import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import image from "../../../assets/image/img3.jpg";
import avatar from "../../../assets/image/testimonial-2.jpg";
import { blogList } from "../Home";

const DetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogList.find((item) => item.id === id);
  return (
    <section>
      {!!blog && (
        <div className={styles.detail}>
          <Image src={blog.image} alt="image" className={styles.image} />
          <div className={styles.detailWrapper}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.description}>{blog.description}</p>
            <div className={styles.authorWrapper}>
              <Image src={avatar} alt="no avatar" className={styles.avatar} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailPage;
