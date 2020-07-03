import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import { actions as homeActions } from "../../redux/home/index.js";
// import { selectors as homeSelectors } from "../../redux/home/index.js";
import styles from "./home.css";
import Text from "../../components/Text/index.js";

const getDescription = (state) => {
  if (state.home[0]) {
    return state.home[0].description;
  }
};

const selectHomeInfo = createSelector(getDescription, (description) => ({
  description, // extract this to redux/home/selectors
}));

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeActions.requestHome());
  }, [dispatch]);

  const { description } = useSelector(selectHomeInfo);

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
