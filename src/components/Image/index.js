import React from "react";
import PropTypes from "prop-types";

import styles from "./image.module.css";

const Source = ({ srcSet, width }) => {
  return (
    <source
      srcSet={srcSet}
      data-srcset={srcSet}
      media={`(min-width: ${width}px)`}
    ></source>
  );
};

Source.propTypes = {
  srcSet: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

const Image = ({ src, alt, sources, dataId }) => (
  <picture data-qa="image" data-id={dataId}>
    {sources.map(({ srcSet, width }) => (
      <Source srcSet={srcSet} width={width} key={srcSet} />
    ))}

    <img src={src} alt={alt} data-src={src} className={styles.img}></img>
  </picture>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      srcSet: PropTypes.string,
      width: PropTypes.number,
    })
  ),
  dataId: PropTypes.string,
};

export default Image;
