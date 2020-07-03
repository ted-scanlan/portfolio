// to start with lets just try and render home page description. dont worry about that statuses and page errors etc just yet.

// this is the gateway so to speak to actions and reducers

// call createActions with endpoint and params

import createAction from "./actions/index.js";
import createReducer from "./reducers/index.js";
import createTypes from "./types/index.js";

const createRequest = ({ name, endpoint, params } = {}) => {
  // need to create types, so i will have a success/pending/error whihci can send to reducer, then if its SUCCESS, it changes the state of the app to have the data (i.e. home description) in it.
  console.log({ name });

  const types = createTypes(name);
  const actions = createAction({ name, endpoint, params });
  const reducers = createReducer(types);
  //   const selectors = createSelector

  return {
    actions,
    reducers,
  };
};

export default createRequest;
