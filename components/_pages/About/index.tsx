import React, { useState } from "react";
import Blocks from "editorjs-blocks-react-renderer";
import Image from "next/image";

import styles from "./styles.module.scss";
import Container from "../../_ui/Container";

const dataBlocks = {
  time: 1550476186479,
  blocks: [
    {
      id: "N0gp9N1pq7",
      type: "header",
      data: { text: "What is Lorem Ipsum?", level: 2 },
    },
    {
      id: "Hh-nVnr9kq",
      type: "paragraph",
      data: {
        text: "<b>Lorem Ipsum</b>&nbsp;is simply dummy text of th…ldus PageMaker including versions of Lorem Ipsum.",
      },
    },
    {
      id: "whcnxun7M7",
      type: "image",
      data: {
        file: { url: "http://192.168.113.228:5001/storage/images/Blog/logo.png" },
        caption: "Timetravel endless value",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
  ],
  version: "2.8.1",
};

const AboutPage: React.FC = () => {
  const [swalProps, setSwalProps] = useState({});
  return (
    <Container>
      <div className={styles.wrapper}>
        {/* <img src="https://codex.so/public/app/img/external/codex2x.png"></img> */}
        <Image
          src="http://192.168.113.228:5001/storage/images/Blog/logo.png"
          width={100}
          height={100}
          alt=""
        ></Image>
        <Blocks data={dataBlocks} />
      </div>
    </Container>
  );
};

export default AboutPage;
