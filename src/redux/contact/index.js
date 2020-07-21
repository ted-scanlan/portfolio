//this configures the request your going to make to get back the page data

import api from "../../constants/index.js";
import createRequest from "../helpers/create-request/index.js";
import { getInfo } from "./selectors.js";

export const name = "contact";

const endpoint = `${api}/${name}`;

const params = {
  slug: "ted-contact",
};

const redux = createRequest({
  name,
  endpoint,
  params,
});

export const { reducers } = redux;

export const actions = {
  requestContact: redux.actions.requestData,
};

export const selectors = {
  status: redux.selectors,
  getInfo: getInfo,
};
