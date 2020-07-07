import React from "react";
import { createSelector } from "reselect";

// const getHeading = (state)

const getDescription = (state) => {
  if (state.home[0]) {
    return state.home[0].description;
  }
};

export const selectors = createSelector(getDescription, (description) => ({
  description, // extract this to redux/home/selectors
}));
