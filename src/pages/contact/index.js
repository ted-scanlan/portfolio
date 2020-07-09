import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  actions as contactActions,
  selectors as contactSelectors,
} from "../../redux/contact/index.js";
import styles from "./contact.module.css";
import Text from "../../components/Text/index.js";

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactActions.requestContact());
  }, [dispatch]);

  const info = useSelector(contactSelectors);

  return (
    <div className={styles.contact}>
      {info.data && (
        <div className={styles.email}>
          <Text dataId="email" style={Text.styles.large}>
            {info.data.email}
          </Text>
        </div>
      )}
      {info.data && (
        <div className={styles.number}>
          <Text dataId="number" style={Text.styles.large}>
            {info.data.number}
          </Text>
        </div>
      )}
    </div>
  );
};

export default Contact;
