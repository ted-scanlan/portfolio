import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  actions as homeActions,
  selectors as homeSelectors,
} from "../../redux/home/index.js";
import styles from "./home.module.css";
import Text from "../../components/Text/index.js";
import Error from "../../components/Error/index.js";
import Loader from "../../components/Loader/index.js";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeActions.requestHome());
  }, [dispatch]);

  const getStatuses = useSelector(homeSelectors.other);
  const hasError = getStatuses.status.home.hasError;
  const isPending = getStatuses.status.home.isPending;

  const { description } = useSelector(homeSelectors.custom);
  function getInfo(des) {
    return des.data[0].description;
  }

  // now the action has been sent to update the state, we need to use a selector to grab the bits of state we need for the page, in this case the description info.

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
    <div className={styles.home}>
      {description.data && (
        <div className={styles.descriptionContainer}>
          <Text dataId="homeDescription">{getInfo(description)}</Text>
        </div>
      )}
    </div>
  );
};

export default Home;

// add new action for error
// page starts with inital state haserror: false
// if error back from api haserror: true
// error component shows on page if haserror: true

// then add ispending to state

// then add a link component and tests for redux  will have to watch youtube lessons etc.
