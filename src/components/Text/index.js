import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./text.module.css";

const Text = ({ children, element: Element, style, color, dataId }) => {
  return (
    <Element
      className={cx(styles.text, styles[style], styles[color])}
      data-qa="text"
      data-id={dataId}
    >
      {children}
    </Element>
  );
};

Text.styles = {
  small: "SMALL",
  medium: "MEDIUM",
  large: "LARGE",
};

Text.colors = {
  blue: "BLUE",
  black: "BLACK",
};

Text.elements = {
  p: "p",
  span: "span",
  h1: "h1",
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  style: PropTypes.oneOf(Object.values(Text.styles)), // style must be one of the stated style props
  element: PropTypes.oneOf(Object.values(Text.elements)),
  color: PropTypes.oneOf(Object.values(Text.colors)),
  dataId: PropTypes.string,
};

Text.defaultProps = {
  element: Text.elements.p,
  style: Text.styles.small,
  color: Text.colors.black,
  dataId: null,
};

export default Text;
