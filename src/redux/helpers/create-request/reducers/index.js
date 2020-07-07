// this will take the state and alter it to add the data that comes back from the api request

export default (types) => (state = {}, { type, data }) => {
  // the second argument is the action, which can be destructured to extract the type and the data
  switch (type) {
    case "SUCCESS":
      return data;
    default:
      return state;
  }
};
