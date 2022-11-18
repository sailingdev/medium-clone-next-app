import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import classNames from "classnames";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
  banner: string | StaticImageData;
  title?: string;
  description?: string;
  slug?: string;
};

const BlogCard: React.FC<Props> = ({
  className = "",
  title,
  banner,
  description,
  slug,
}) => {
  return (
    <Link className={classNames(styles.wrapper, className)} href={`/blog/${slug}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={banner}
          alt="image"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
        <div className={styles.textWrapper}>
          {!!title && <p className={styles.title}>{title}</p>}
          {!!description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
