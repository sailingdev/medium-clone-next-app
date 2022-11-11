import React, { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";

import { EDITOR_JS_TOOLS } from "../../../utils/shared/constant";
import styles from "./styles.module.scss";
import Button from "../Button";
import Input from "../Input";
import { FieldValues, useForm } from "react-hook-form";

export default function BlogEditor() {
  const [editor, setEditor] = useState<EditorJS | null>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      if (editor) {
        const editorData = await editor.save();
        console.log("editorData: ", editorData);
        data.content = JSON.stringify(editorData);
        console.log(data);
      }
    } catch (error) {
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
          <Button type="submit" className={styles.button}>
            Publish
          </Button>
        )}
      </div>
    </form>
  );
}
