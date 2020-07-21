import api from "../../constants/index.js";

import createRequest from "../helpers/create-request/index.js";
import { getInfo, getSingleProject } from "./selectors.js";

export const name = "projects";

const endpoint = `${api}/${name}`;

export const params = {
  slug: "ted-projects",
  //   _fields: "acf",
};

const redux = createRequest({ name, endpoint, params });

export const { reducers } = redux;

export const selectors = {
  status: redux.selectors,
  getInfo: getInfo,
  getProject: getSingleProject,
};

export const actions = {
  requestProjects: redux.actions.requestData,
};
