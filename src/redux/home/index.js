// this is going to make a call to a createrequest helper (which will be used in all verticals)
// ill need the name (home), params and endpoint (of api which will be a static json file (look at the example i made))

import createRequest from "../helpers/create-request/index.js";
// import selectors from "./selectors.js";

const api = "http://localhost:3000";

export const name = "home";

export const endpoint = `${api}/${name}`;

export const params = {
  slug: "ted-home",
  //   _fields: "acf",
};

// calls create request

const redux = createRequest({
  name,
  endpoint,
  params,
});

// in need to make createRequest in the helper, that will make the api request and send the action to update the state with the api data.
export const { reducers } = redux;

// export const selectors = selectors;

export const actions = {
  requestHome: redux.actions.requestData,
}; // if you want to export it as an object it has to be in the key/property format
