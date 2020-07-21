import { createSelector } from "reselect";

// const getHeading = (state)

const getDescription = (state) => {
  if (!(state.home.data === undefined || state.home.data.length == 0)) {
    return state.home.data[0].acf.description;
  }
};

const getTitle = (state) => {
  if (!(state.home.data === undefined || state.home.data.length == 0)) {
    return state.home.data[0].acf.title;
  }
};

export const getInfo = createSelector(
  [getDescription, getTitle],
  (description, title) => ({
    description,
    title,
  })
);
