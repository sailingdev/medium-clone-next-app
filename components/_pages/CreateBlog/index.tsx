import React, { Fragment } from "react";
import dynamic from "next/dynamic";

let BlogEditor = dynamic(() => import("../../_ui/BlogEditor"), {
  ssr: false,
});

const CreateBlogPage = () => {
  return (
    <Fragment>
      <BlogEditor />
    </Fragment>
  );
};

export default CreateBlogPage;
