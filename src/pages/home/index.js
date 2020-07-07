import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  actions as homeActions,
  selectors as homeSelectors,
} from "../../redux/home/index.js";
import styles from "./home.module.css";
import Text from "../../components/Text/index.js";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeActions.requestHome());
  }, [dispatch]);

  const { description } = useSelector(homeSelectors);

  // now the action has been sent to update the state, we need to use a selector to grab the bits of state we need for the page, in this case the description info.

  return (
    <div className={styles.home}>
      <div className={styles.descriptionContainer}>
        <Text dataId="homeDescription">{description}</Text>
      </div>
    </div>
  );
};

export default Home;
