import Image, { StaticImageData } from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

import { addComment } from "../../../utils/restApi/addComment";
import Button from "../Button";
import styles from "./styles.module.scss";
import userAvatar from "../../../assets/image/person.png";

type Props = {
  avatar?: string | StaticImageData;
  id: number;
};

const AddComment: React.FC<Props> = ({ avatar, id }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data: any) => {
    try {
      data.blogId = id;
      await addComment(data);
    } catch (error) {}
    reset();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={avatar ?? userAvatar} alt="no avatar" className={styles.image} />
      </div>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.comment}>
            <label htmlFor="comment" className={styles.label}>
              Add your comment
            </label>
            <textarea
              rows={3}
              id="comment"
              className={styles.textarea}
              placeholder="Add your comment..."
              {...register("comment", { required: true })}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className={styles.spacer} aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className={styles.match}></div>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <Button type="submit" className={styles.button}>
              Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddComment;
