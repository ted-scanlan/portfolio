import React from "react";
import Text from "../Text/index.js";
import Link from "../Link/index.js";
import styles from "./header.module.css";

const Header = () => (
  <div className={styles.header} data-qa="header">
    <div className={styles.nameTitle} data-id="nameJob">
      <Link href="/" dataId="home-link">
        <div className={styles.name} data-id="nameContainer">
          <Text
            style={Text.styles.large}
            element={Text.elements.h1} // i think this might need to be span if i want it to be a link
            dataID="name"
          >
            Ted Scanlan
          </Text>
        </div>
        <Text
          style={Text.styles.medium}
          element={Text.elements.h1}
          data-id="job"
        >
          Software Developer
        </Text>
      </Link>
    </div>
    <div className={styles.nav} data-id="nav">
      <Link href="/contact" dataId="contact-link">
        <Text
          style={Text.styles.small}
          element={Text.elements.h1}
          data-id="nav"
        >
          Contact
        </Text>
      </Link>
    </div>
  </div>
);

export default Header;
