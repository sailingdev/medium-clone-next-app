import Image, { StaticImageData } from "next/image";
import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";
import Link from "next/link";

type Props = {
  id: string;
  className?: string;
  image: string | StaticImageData;
  category?: string;
  title?: string;
};

const BlogCard: React.FC<Props> = ({ className = "", image, category, title, id }) => {
  return (
    <Link className={classNames(styles.wrapper, className)} href={`/blog/${id}`}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt="image" className={styles.image} />
        <div className={styles.textWrapper}>
          {!!category && <p className={styles.category}>{category}</p>}
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
