import { createSelector } from "reselect";

const getDescription = (state) => {
  if (!(state.contact.data === undefined || state.contact.data.length == 0)) {
    return state.contact.data[0].acf.description;
  }
};

const getEmail = (state) => {
  if (!(state.contact.data === undefined || state.contact.data.length == 0)) {
    return state.contact.data[0].acf.email;
  }
};

const getNumber = (state) => {
  if (!(state.contact.data === undefined || state.contact.data.length == 0)) {
    return state.contact.data[0].acf.number;
  }
};

const getLinks = (state) => {
  if (!(state.contact.data === undefined || state.contact.data.length == 0)) {
    return state.contact.data[0].acf.links;
  }
};

// remember i have to add the root reducer so the state for contact page can appear in the root reducer

export const getInfo = createSelector(
  [getDescription, getEmail, getNumber, getLinks],
  (description, email, number, links) => ({
    description,
    email,
    number,
    links,
  })
);
