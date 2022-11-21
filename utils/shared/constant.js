import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Code from "@editorjs/code";
import Images from "@editorjs/image";
import Header from "@editorjs/header";
import SimpleImage from "@editorjs/simple-image";

export const EDITOR_JS_TOOLS = {
  header: Header,
  image: {
    class: Images,
    config: {
      uploader: {
        uploadByFile(file) {
          console.log("file: ", file);
          const url = URL.createObjectURL(file);
          return {
            success: 1,
            file: {
              url: url,
              file: file,
            },
          };
        },
      },
    },
  },
  embed: Embed,
  list: List,
  table: Table,
  code: Code,
  simpleImage: SimpleImage,
};
