import api from "../../constants/index.js";

import createRequest from "../helpers/create-request/index.js";
import { getInfo } from "./selectors.js";

export const name = "projects";

const endpoint = `${api}/${name}`;

export const params = {
  _fields: "title,acf,slug",
};

const redux = createRequest({ name, endpoint, params });

export const { reducers } = redux;

export const selectors = {
  status: redux.selectors,
  getInfo: getInfo,
};

export const actions = {
  requestProjects: redux.actions.requestData,
};
