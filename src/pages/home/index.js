import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  actions as homeActions,
  selectors as homeSelectors,
} from "../../redux/home/index.js";
import {
  actions as projectActions,
  selectors as projectSelectors,
} from "../../redux/projects/index.js";
import styles from "./home.module.css";
import Text from "../../components/Text/index.js";
import Error from "../../components/Error/index.js";
import Loader from "../../components/Loader/index.js";
import Image from "../../components/Image/index.js";
import Link from "../../components/Link/index.js";
import Tile from "../../components/Tile/index.js";

import imagesConfig from "../../assets/images/config.js";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeActions.requestHome());
    dispatch(projectActions.requestProjects());
  }, [dispatch]);

  const getStatuses = useSelector(homeSelectors.status);
  const { hasError, isPending } = getStatuses.status;

  const homeContent = useSelector(homeSelectors.getInfo);
  const { description, title } = homeContent;

  const projectContent = useSelector(projectSelectors.getInfo);
  const { projects } = projectContent;

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
      <div className={styles.descriptionContainer}>
        <Text dataId="homeDescription">{description}</Text>
      </div>
      <div className={styles.titleContainer}>
        <Text
          style={Text.styles.medium}
          element={Text.elements.h1}
          dataId="homeTitle"
        >
          {title}
        </Text>
      </div>

      <div className={styles.projects}>
        {projects &&
          projects.map(({ name, title, url }, i) => {
            return (
              <div data-qa="projectTile" key={i} className={styles.project}>
                <Link href={`projects/${url}`}>
                  <Tile>
                    <div className={styles.projectImage}>
                      <Image src={imagesConfig["medium_Large"][name].src} />
                    </div>
                    <div className={styles.projectTitle}>
                      <Text>{title}</Text>
                    </div>
                  </Tile>
                </Link>
              </div>
            );
          })}
      </div>
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
