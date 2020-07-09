import React from "react";
import styles from "./loader.module.css";

const Loader = () => (
  <div className={styles.book}>
    <div className={styles.inner}>
      <div className={styles.left}></div>
      <div className={styles.middle}></div>
      <div className={styles.right}></div>
    </div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);

export default Loader;
