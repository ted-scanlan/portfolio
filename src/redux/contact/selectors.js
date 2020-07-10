import { createSelector } from "reselect";

const getDescription = (state) => {
  if (state.contact.data) {
    return state.contact.data.description;
  }
};

const getEmail = (state) => {
  if (state.contact.data) {
    return state.contact.data.email;
  }
};

const getNumber = (state) => {
  if (state.contact.data) {
    return state.contact.data.number;
  }
};

// remember i have to add the root reducer so the state for contact page can appear in the root reducer

export const getInfo = createSelector(
  [getDescription, getEmail, getNumber],
  (description, email, number) => ({
    description,
    email,
    number,
  })
);
