import React from "react";
import styles from "./tile.module.css";

const Tile = ({ children, dataId }) => {
  return (
    <div className={styles.tile} data-id={dataId}>
      {children}
    </div>
  );
};

export default Tile;

// const Tiles = ({ children }) => (
//   <div data-qa="tiles">
//     <div className={styles.name}></div>
//   </div>
// );

// Tiles.tile = Tile;
