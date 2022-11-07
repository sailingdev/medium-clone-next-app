import Image, { StaticImageData } from "next/image";
import React from "react";

import styles from "./styles.module.scss";

type Props = {
  avatar: string | StaticImageData;
};

const AddComment: React.FC<Props> = ({ avatar }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={avatar} alt="no avatar" className={styles.image} />
      </div>
      <div className={styles.formWrapper}>
        <form>
          <div className={styles.comment}>
            <label htmlFor="comment" className={styles.label}>
              Add your comment
            </label>
            <textarea
              rows={3}
              name="comment"
              id="comment"
              className={styles.textarea}
              placeholder="Add your comment..."
              defaultValue={""}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className={styles.spacer} aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className={styles.match}></div>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <button type="button" className={styles.button}>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddComment;
