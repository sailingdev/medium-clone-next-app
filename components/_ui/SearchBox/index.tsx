import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import styles from "./styles.module.scss";

const SearchBox: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className={styles.iconWrapper}>
        <MagnifyingGlassIcon className={styles.icon} aria-hidden="true" />
      </div>
      <input
        id="search"
        name="search"
        className={styles.inputWrapper}
        placeholder="Search"
        type="search"
      />
    </div>
  );
};

export default SearchBox;
