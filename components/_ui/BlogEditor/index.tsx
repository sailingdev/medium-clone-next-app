import React, { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";

import Button from "../Button";
import Input from "../Input";
import axios from "../../../utils/functions/axios";
import styles from "./styles.module.scss";
import { EDITOR_JS_TOOLS } from "../../../utils/shared/constant";
import { FieldValues, useForm } from "react-hook-form";
import { publishBlog } from "../../../utils/restApi/publishBlog";

export default function BlogEditor() {
  const [editor, setEditor] = useState<EditorJS | null>();
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      setIsPending(true);
      if (editor) {
        const editorData = await editor.save();
        await Promise.all(
          editorData.blocks.map(async (item, index) => {
            if (item.type === "image") {
              const formData = new FormData();
              formData.append("directory", "blogs");
              formData.append("file", item.data.file.file);
              const res = await axios(true).post(
                `${process.env.NEXT_PUBLIC_API_URL}/file/upload`,
                formData
              );
              editorData.blocks[index].data.file.url = res.data.path;
              delete editorData.blocks[index].data.file.file;
            }
          })
        );

        const bannerArray = editorData.blocks.find((item) => item.type === "image");
        const banner = bannerArray?.data.file.url;
        data.content = JSON.stringify(editorData);
        if (banner) {
          data.banner = banner;
        }
        await publishBlog(data);
        setIsPending(false);
        editor.clear();
        reset();
      }
    } catch (error) {
      setIsPending(false);
      console.error("error: ", error);
    }
  };

  useEffect(() => {
    setEditor(
      new EditorJS({
        holder: "editorjs",
        // autofocus: true,
        tools: EDITOR_JS_TOOLS,
        placeholder: "Let`s write an awesome story!",
      })
    );
    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, []);

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputWrapper}>
        <Input
          name="title"
          type="text"
          register={register("title", {
            required: "Enter title",
          })}
          placeholder="Title"
          error={errors.title}
          autoFocus
        />
        <Input
          name="title"
          type="text"
          register={register("description")}
          placeholder="Description"
        />
      </div>
      <div id="editorjs" className={styles.editor}>
        {!!editor && (
          <Button
            type="submit"
            className={styles.button}
            isPending={isPending}
            disabled={isPending}
          >
            Publish
          </Button>
        )}
      </div>
    </form>
  );
}
