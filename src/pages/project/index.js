import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { actions as projectActions } from "../../redux/projects/index.js";
import { selectors as projectSelectors } from "../../redux/projects/index.js";
import imagesConfig from "../../assets/images/config.js";
import styles from "./project.module.css";

import Text from "../../components/Text/index.js";
import Image from "../../components/Image/index.js";
import Link from "../../components/Link/index.js";
import Loader from "../../components/Loader/index.js";
import Error from "../../components/Loader/index.js";
import Tile from "../../components/Tile/index.js";

const Project = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(projectActions.requestProjects({ params: { slug } }));
  }, [dispatch, slug]);

  const { status } = useSelector(projectSelectors.status);
  const { isPending, hasError } = status;

  const { projects } = useSelector(projectSelectors.getInfo);
  const project = projects[0];
  const imageSrc = imagesConfig["medium"][slug].src;

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
        <Error />
      </div>
    );
  }

  return (
    <div className={styles.project}>
      {project && (
        <Tile>
          <div className={styles.title}>
            <Text
              style={Text.styles.medium}
              element={Text.elements.h1}
              dataId="projectTitle"
            >
              {project.title}
            </Text>
          </div>
          <div className={styles.projectImage}>
            <Image src={imageSrc} />
          </div>
          <div className={styles.description}>
            <Text style={Text.styles.small} element={Text.elements.h1}>
              {project.company.title}
            </Text>
            <Text>{project.company.description}</Text>
          </div>
          <div className={styles.techUsed}>
            <Text style={Text.styles.small} element={Text.elements.h1}>
              {project.techUsed.title}
            </Text>
            <Text>{project.techUsed.description}</Text>
          </div>
          <div className={styles.link}>
            <Link href={project.link.url}>
              <Text>{project.link.title}</Text>
            </Link>
          </div>
        </Tile>
      )}
    </div>
  );
};

export default Project;
