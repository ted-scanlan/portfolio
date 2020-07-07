import { createSelector } from "reselect";

const getContactInfo = (state) => {
  if (state.contact) {
    return state.contact;
  }
}; // remember i have to add the root reducer so the state for contact page can appear in the root reducer

export const selectors = createSelector(getContactInfo, (info) => info);
