import React from "react";
import styles from "./image.module.css";

const Image = ({ src, alt, sources, dataId }) => (
  <picture data-qa="image" data-id={dataId}>
    <img src={src} alt={alt} data-src={src} className={styles.img}></img>
  </picture>
);

export default Image;
