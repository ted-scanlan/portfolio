import axios from "axios";

// this will have the middleware in that calls the api

// this is imported as createAction

const createActions = () => ({
  fetchDataSuccess: (data) => ({
    type: "SUCCESS",
    data,
  }),
});

export default ({ endpoint, params = {} } = {}) => {
  const { fetchDataSuccess } = createActions();
  return {
    requestData: ({ params: dynamicParams = {} } = {}) => async (dispatch) => {
      console.log(params);
      try {
        const response = await axios.get(endpoint, {
          params: {
            ...params,
            ...dynamicParams,
          },
        });
        // we need to send an action with the data;
        dispatch(fetchDataSuccess(response?.data));
      } catch (error) {
        console.log(error);
      }
    },
  };
};
