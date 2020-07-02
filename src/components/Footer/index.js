import React from "react";
import Text from "../Text/index.js";
import styles from "./footer.module.css";

const Footer = () => (
  <div className={styles.footer} data-qa="footer">
    <div className={styles.name}>
      <Text style={Text.styles.small} element={Text.elements.p} data-id="name">
        Ted Scanlan
      </Text>
    </div>
    <div className={styles.number}>
      <Text
        style={Text.styles.small}
        element={Text.elements.p}
        data-id="number"
      >
        07964704890
      </Text>
    </div>
  </div>
);

export default Footer;
