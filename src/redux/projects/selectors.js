import { createSelector } from "reselect";

const getProjects = (state) => {
  console.log("project selector", state);
  if (state.projects.data) return state.projects.data;
};

export const getInfo = createSelector(getProjects, (projects) => ({
  projects,
}));

// export const getSingleProject = (slug) =>
//   createSelector(
//     [(state) => projectHelper(state, slug)],
//     (project) =>
//       console.log("hit") || {
//         project,
//       }
//   );

// const projectHelper = (state, slug) => {
//   if (!(state.projects.data === undefined || state.projects.data.length == 0)) {
//     state.projects.data.forEach((project) => {
//       if (project.name === slug) {
//         console.log(project);
//         return project;
//       }
//     });
//   }
// };
