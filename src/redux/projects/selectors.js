import { createSelector } from "reselect";

const getProjects = (state) => {
  console.log("project selector", state);
  if (state.projects.data) return state.projects.data;
};

export const getInfo = createSelector(getProjects, (projects) => ({
  projects,
}));
