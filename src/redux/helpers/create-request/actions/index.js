import axios from "axios";

const createActions = () => ({
  fetchDataSuccess: (data) => ({
    type: "SUCCESS",
    data,
  }),
  fetchDataError: () => ({
    type: "ERROR",
  }),
  fetchDataPending: () => ({
    type: "PENDING",
  }),
});

export default ({ endpoint, params = {} } = {}) => {
  // this is imported as createAction
  const {
    fetchDataSuccess,
    fetchDataError,
    fetchDataPending,
  } = createActions();
  return {
    requestData: ({ params: dynamicParams = {} } = {}) => async (dispatch) => {
      dispatch(fetchDataPending());
      try {
        const response = await axios.get(endpoint, {
          params: {
            ...params,
            ...dynamicParams,
          },
        });
        // we need to send an action with the data;
        return new Promise((resolve) => {
          setTimeout(
            () => resolve(dispatch(fetchDataSuccess(response?.data))),
            1500
          );
        });
      } catch (error) {
        console.log(error);
        dispatch(fetchDataError());
      }
    },
  };
};
