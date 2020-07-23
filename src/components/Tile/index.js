import React from "react";
import PropTypes from "prop-types";

import styles from "./tile.module.css";

const Tile = ({ children, dataId }) => {
  return (
    <div className={styles.tile} data-id={dataId}>
      {children}
    </div>
  );
};

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  dataId: PropTypes.string,
};

export default Tile;

// const Tiles = ({ children }) => (
//   <div data-qa="tiles">
//     <div className={styles.name}></div>
//   </div>
// );

// Tiles.tile = Tile;
