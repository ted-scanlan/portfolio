import { createSelector } from "reselect";

const getProjects = (state) => {
  console.log("project selector", state);
  if (state.projects.data) return state.projects.data;
};

const projectHelper = (state, slug) => {
  console.log(state);
  console.log(slug);
};

export const getSingleProject = (slug) =>
  createSelector([(state) => projectHelper(state, slug)], (project) => ({
    project,
  }));

export const getInfo = createSelector(getProjects, (projects) => ({
  projects,
}));

export const dick = (slug) => ({
  getSingleProject: getSingleProject(slug),
});
