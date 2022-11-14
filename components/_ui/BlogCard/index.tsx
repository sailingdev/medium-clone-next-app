import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import classNames from "classnames";

import styles from "./styles.module.scss";

type Props = {
  id: string;
  className?: string;
  image: string | StaticImageData;
  title?: string;
  description?: string;
};

const BlogCard: React.FC<Props> = ({ className = "", image, title, description, id }) => {
  return (
    <Link className={classNames(styles.wrapper, className)} href={`/blog/${id}`}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt="image" className={styles.image} />
        <div className={styles.textWrapper}>
          {!!title && <p className={styles.title}>{title}</p>}
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
