import React from "react";
import PropTypes from "prop-types";
import styles from "./link.module.css";
import { Link as InternalLink } from "react-router-dom";

const Link = ({ children, href, isAnchor, dataId }) => (
  <span data-qa="link" data-id={dataId}>
    {isAnchor ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {children}
      </a>
    ) : (
      <InternalLink to={href} className={styles.link}>
        {children}
      </InternalLink>
    )}
  </span>
);

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  href: PropTypes.string.isRequired,
  isAnchor: PropTypes.bool,
  dataId: PropTypes.string,
};

Text.defaultProps = {
  dataId: "",
  isAnchor: false,
};
export default Link;
