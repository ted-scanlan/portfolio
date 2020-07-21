import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { actions as projectActions } from "../../redux/projects/index.js";
import { selectors as projectSelectors } from "../../redux/projects/index.js";
import { getSingleProject } from "../../redux/projects/selectors.js";

const Project = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(projectActions.requestProjects({ params: { slug } }));
  }, [dispatch, slug]);

  const { info } = useSelector(getSingleProject(slug));

  return <div>{console.log(info)}a project</div>;
};

export default Project;
