// to start with lets just try and render home page description. dont worry about that statuses and page errors etc just yet.

// this is the gateway so to speak to actions and reducers

// call createActions with endpoint and params

import createAction from "./actions/index.js";
import createReducer from "./reducers/index.js";
import createTypes from "./types/index.js";
import { statusSelectors as createSelector } from "./selectors/index.js";

const createRequest = ({ name, endpoint, params } = {}) => {
  // need to create types, so i will have a success/pending/error whihci can send to reducer, then if its SUCCESS, it changes the state of the app to have the data (i.e. home description) in it.

  const types = createTypes(name);
  const actions = createAction({ types, endpoint, params });

  console.log({ types });
  const reducers = createReducer(types);
  const selectors = createSelector(name);

  // types need to be passed to actions and reducers, so that they know which page content is being added to. all reducers are called when an action is fired and if you dont specificy which one then the data will be added to all reducers in root reducer. you can thin of the reducer as a re-useable component that is used in all pages.

  return {
    actions,
    reducers,
    selectors,
  };
};

export default createRequest;
