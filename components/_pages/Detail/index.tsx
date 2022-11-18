import React from "react";
import Image from "next/image";
import Blocks from "editorjs-blocks-react-renderer";
import format from "date-fns/format";

import AddComment from "../../_ui/AddComment";
import styles from "./styles.module.scss";
import { useAppSelector } from "../../../hooks/store";
import { authSelector } from "../../../store/Auth";
import { BlogDetailPageProps } from "../../../pages/blog/[slug]";
import userAvatar from "../../../assets/image/person.png";

const DetailPage: React.FC<BlogDetailPageProps> = ({ blog }) => {
  const { userData } = useAppSelector(authSelector);

  return (
    <section>
      {!!blog && (
        <div>
          <div className={styles.image}>
            <Image src={blog.banner} alt="image" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.blogWrapper}>
              <h1 className={styles.title}>{blog.title}</h1>
              <p className={styles.description}>{blog.description}</p>
              <div className={styles.authorWrapper}>
                <Image src={userAvatar} alt="no avatar" className={styles.avatar} />
                <p>
                  Blog post by
                  <span className={styles.authorText}> Anna Agnihotri</span>- Published at{" "}
                  {format(new Date(blog.createdAt), "MMM dd, yyyy")}
                </p>
              </div>
              <div className={styles.descriptionWrapper}>
                <Blocks data={JSON.parse(blog.content)} />
              </div>
              <div className={styles.commentWrapper}>
                <div>
                  <div className={styles.commentAuthor}>
                    <Image src={userAvatar} alt="no avatar" className={styles.avatar} />
                    <p>
                      <span className={styles.commentInfo}>UserName </span>commented on{" "}
                      {format(new Date(blog.createdAt), "MMM dd, yyyy")}
                    </p>
                  </div>
                  <div className={styles.commentText}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia.
                  </div>
                </div>
              </div>
              {userData && (
                <>
                  <hr className={styles.line} />
                  <div className={styles.addComment}>
                    <AddComment id={blog.id} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailPage;
