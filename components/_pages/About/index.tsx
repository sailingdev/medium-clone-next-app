import Image from "next/image";
import React, { useState } from "react";

import styles from "./styles.module.scss";

const AboutPage: React.FC = () => {
  const [file, setFile] = useState<any>();
  function handleChange(e: any) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div>
      <div className="App">
        {/* <h2>Add Image:</h2>
        <input type="file" onChange={handleChange} />
        <Image src={file} alt="" width={100} height={100} /> */}
      </div>
    </div>
  );
};

export default AboutPage;
