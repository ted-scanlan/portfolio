import React from "react";
import Text from "../Text/index.js";
import styles from "./error.module.css";

const Error = ({ children }) => (
  <div className={styles.error} data-qa="error">
    <div className={styles.name}>
      <Text
        style={Text.styles.small}
        element={Text.elements.p}
        data-id="errorMessage"
      >
        {children}
      </Text>
    </div>
  </div>
);

export default Error;
