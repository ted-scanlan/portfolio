// this will take the state and alter it to add the data that comes back from the api request

const initialState = {
  hasError: false,
  isPending: false,
};

export default (types) => (state = initialState, { type, data }) => {
  // the second argument is the action, which can be destructured to extract the type and the data
  switch (type) {
    case "SUCCESS":
      return {
        ...state,
        isPending: false,
        data,
      };
    case "ERROR":
      return {
        ...state,
        hasError: true,
        // isPending: false,
      };
    case "PENDING":
      return {
        ...state,
        isPending: true,
      };
    default:
      return state;
  }
};
