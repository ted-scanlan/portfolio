const initialState = {
  isPending: false,
  data: [],
  hasError: false,
};

export default (types) => (state = initialState, { type, data }) => {
  // the second argument is the action, which can be destructured to extract the type and the data

  switch (type) {
    case types.success:
      return {
        ...state,
        isPending: false,
        data,
      };
    case types.error:
      return {
        ...state,
        hasError: true,
        isPending: false,
      };
    case types.pending:
      return {
        ...state,
        isPending: true,
      };
    default:
      return state;
  }
};

// every reducer in the combine reducer gets called when an action fires. it doesnt get messy because we specifiy the name in the type, so when the type doesnt match it defaults to return the state as it is. but if we don't specify the type i.e. the reducer (theres one for each page) then each reducer will update its state with the returned data, so youd end up with api data being added to each reducer.
// https://stackoverflow.com/questions/35023957/will-every-redux-reducer-be-called-if-an-action-is-being-dispatched
// https://stackoverflow.com/questions/37379904/why-a-dispatch-to-a-reducer-causes-all-reducers-get-called
// https://stackoverflow.com/questions/33590579/all-reducers-will-be-invoked-when-an-action-is-dispatched
