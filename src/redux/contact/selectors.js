import { createSelector } from "reselect";

const getContactInfo = (state) => {
  if (state.contact) {
    return state.contact;
  }
}; // remember i have to add the root reducer so the state for contact page can appear in the root reducer

export const selectors = createSelector(getContactInfo, (info) => info);

// import { createSelector } from "reselect";

// function isEmpty(obj) {
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) return false;
//   }
//   return true;
// }

// const getContactInfo = (state) => {
//   console.log("state", state);
//   if (!isEmpty(state.contact.data)) {
//     console.log(state.contact.data.email);
//     return state.contact;
//   }
// }; // remember i have to add the root reducer so the state for contact page can appear in the root reducer

// export const selectors = createSelector(getContactInfo, (info) => info);
