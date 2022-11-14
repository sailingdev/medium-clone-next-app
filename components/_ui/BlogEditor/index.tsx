import React, { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";

import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.scss";
import { EDITOR_JS_TOOLS } from "../../../utils/shared/constant";
import { FieldValues, useForm } from "react-hook-form";
import { publishBlog } from "../../../utils/functions/publishBlog";

export default function BlogEditor() {
  const [editor, setEditor] = useState<EditorJS | null>();
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      setIsPending(true);
      if (editor) {
        const editorData = await editor.save();
        console.log("editorData: ", editorData);
        data.content = JSON.stringify(editorData);
        console.log(data);
        publishBlog(data);
        setIsPending(false);
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
