import React from "react";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
  image: string | StaticImageData;
  title?: string;
  category?: string;
};

const BlogCard: React.FC<Props> = ({ className = "", image, title, category }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt="image" className={styles.image} />
        <div className={styles.textWrapper}>
          {!!category && <p className={styles.category}>{category}</p>}
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
