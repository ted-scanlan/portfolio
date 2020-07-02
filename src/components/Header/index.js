import React from "react";
import Text from "../Text/index.js";
import styles from "./header.module.css";

const Header = () => (
  <div className={styles.header} data-qa="header">
    <div className={styles.nameTitle} data-id="nameJob">
      <div className={styles.name} data-id="nameContainer">
        <Text
          style={Text.styles.large}
          element={Text.elements.h1} // i think this might need to be span if i want it to be a link
          dataID="name"
        >
          Ted Scanlan
        </Text>
      </div>
      <Text style={Text.styles.medium} element={Text.elements.h1} data-id="job">
        Software Developer
      </Text>
    </div>
    <div className={styles.nav}>
      <Text style={Text.styles.small} element={Text.elements.h1} data-id="nav">
        Contact
      </Text>
    </div>
  </div>
);

export default Header;
