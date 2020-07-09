import { createSelector } from "reselect";

const getStatus = (state, name) => {
  console.log("create request statuses", state);
  return state;
};

export const statusSelectors = (name) =>
  createSelector([(state) => getStatus(state, name)], (status) => ({
    status,
  }));
