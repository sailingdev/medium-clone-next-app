import React from "react";
import dynamic from "next/dynamic";

let BlogEditor = dynamic(() => import("../../_ui/BlogEditor"), {
  ssr: false,
});

const CreateBlogPage = () => {
  return (
    <>
      <BlogEditor />
    </>
  );
};

export default CreateBlogPage;
