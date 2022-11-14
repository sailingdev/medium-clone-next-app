import React from "react";
import Blocks from "editorjs-blocks-react-renderer";

import styles from "./styles.module.scss";

const dataBlocks = {
  time: 1550476186479,
  blocks: [
    {
      id: "Vu8oQfAS8j",
      type: "header",
      data: { text: "This is timeTravel site", level: 2 },
    },
    {
      type: "header",
      data: {
        text: "Editor.js",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.",
      },
    },
    {
      type: "header",
      data: {
        text: "Key features",
        level: 3,
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "It is a block-styled editor",
          "It returns clean data output in JSON",
          "Designed to be extendable and pluggable with a simple API",
        ],
      },
    },
    {
      type: "header",
      data: {
        text: "What does it mean «block-styled editor»",
        level: 3,
      },
    },
    {
      type: "paragraph",
      data: {
        text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
      },
    },
  ],
  version: "2.8.1",
};

const AboutPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Blocks data={dataBlocks} />
    </div>
  );
};

export default AboutPage;
