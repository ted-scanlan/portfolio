// this is going to make a call to a createrequest helper (which will be used in all verticals)
// ill need the name (home), params and endpoint (of api which will be a static json file (look at the example i made))

import api from "../../constants/index.js";

import createRequest from "../helpers/create-request/index.js";
import { getInfo } from "./selectors.js";

export const name = "home";

export const endpoint = `${api}/${name}`;

export const params = {
  slug: "ted-home",
  _fields: "acf",
};

const redux = createRequest({
  name,
  endpoint,
  params,
});

export const { reducers } = redux;

export const selectors = {
  getInfo: getInfo,
  status: redux.selectors,
};

// will also need selectors from the createRequest which will enable us to ge the status of the page in order to know whether to display error etc.

export const actions = {
  requestHome: redux.actions.requestData,
}; // if you want to export it as an object it has to be in the key/property format
