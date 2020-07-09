import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  actions as contactActions,
  selectors as contactSelectors,
} from "../../redux/contact/index.js";
import styles from "./contact.module.css";
import Text from "../../components/Text/index.js";
import Loader from "../../components/Loader/index.js";
import Error from "../../components/Error/index.js";

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactActions.requestContact());
  }, [dispatch]);

  const info = useSelector(contactSelectors.custom);

  const getStatus = useSelector(contactSelectors.status);
  const hasError = getStatus.status.contact.hasError; // should i be doing this extracting here on in the selector ?
  const isPending = getStatus.status.contact.isPending;
  // need to tidy this up

  if (isPending) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={styles.error}>
        <Error>Oops, there seems to be an error :(</Error>
      </div>
    );
  }

  return (
    <div className={styles.contact}>
      {console.log(getStatus)}
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
