import React, { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";

import { EDITOR_JS_TOOLS } from "../../../utils/shared/constant";
import styles from "./styles.module.scss";
import Button from "../Button";

export default function BlogEditor() {
  const [editor, setEditor] = useState<EditorJS | null>();

  const publishBlog = () => {
    editor
      ?.save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  useEffect(() => {
    console.log("editor: ", editor);
  }, [editor]);

  useEffect(() => {
    console.log("effect");
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
    <div className={styles.wrapper}>
      <div id="editorjs" className={styles.editor}></div>
      {!!editor && (
        <Button type="button" onClick={publishBlog} className={styles.button}>
          Publish
        </Button>
      )}
    </div>
  );
}
