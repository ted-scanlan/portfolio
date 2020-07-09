import React from "react";
import { createSelector } from "reselect";

// const getHeading = (state)

const getDescription = (state) => {
  console.log(state);
  if (state.home) {
    return state.home;
  }
};

export const selectors = createSelector(getDescription, (description) => ({
  description, // extract this to redux/home/selectors
}));
