import { createSelector } from "reselect";

const getStatus = (state, name) => {
  return state[name];
};

export const statusSelectors = (name) =>
  createSelector([(state) => getStatus(state, name)], (status) => ({
    status,
  }));
