import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  actions as contactActions,
  selectors as contactSelectors,
} from "../../redux/contact/index.js";
import styles from "./contact.module.css";
import Text from "../../components/Text/index.js";
import Link from "../../components/Link/index.js";
import Loader from "../../components/Loader/index.js";
import Error from "../../components/Error/index.js";
import linkedinLogo from "../../assets/logos/linkedin.png";
import githubLogo from "../../assets/logos/github.png";

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactActions.requestContact());
  }, [dispatch]);

  const pageContent = useSelector(contactSelectors.getInfo);
  const { description, email, number, links } = pageContent;

  const getStatuses = useSelector(contactSelectors.status);
  const { hasError, isPending } = getStatuses.status;

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
      <div className={styles.description}>
        <Text style={Text.styles.large} element={Text.elements.h1}>
          {description}
        </Text>
      </div>

      <div className={styles.email}>
        <Text dataId="email" style={Text.styles.large}>
          {email}
        </Text>
      </div>

      <div className={styles.number}>
        <Text dataId="number" style={Text.styles.large}>
          {number}
        </Text>
      </div>

      {links && (
        <div className={styles.contactLinks}>
          <Link href={links.linkedin} isAnchor={true} dataId={"linkedin"}>
            <img
              src={linkedinLogo}
              alt="linkedin"
              className={styles.linkedin}
            ></img>
          </Link>
          <Link href={links.github} isAnchor={true} dataId="github">
            <img src={githubLogo} alt="github" className={styles.github}></img>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Contact;
