import axios from "axios";

const createActions = (types) => ({
  fetchDataSuccess: (data) => ({
    type: types.success,
    data,
  }),
  fetchDataError: () => ({
    type: types.error,
  }),
  fetchDataPending: () => ({
    type: types.pending,
  }),
  fetchDataReset: () => ({
    type: types.reset,
  }),
});

export default ({ types, endpoint, params = {} } = {}) => {
  // this is imported as createAction
  const {
    fetchDataSuccess,
    fetchDataError,
    fetchDataPending,
    fetchDataReset: requestReset,
  } = createActions(types);

  console.log({ endpoint }, { params });
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
        console.log(response);
        return new Promise((resolve) => {
          setTimeout(
            () => resolve(dispatch(fetchDataSuccess(response?.data))),
            1500
          );
        });
      } catch (error) {
        dispatch(fetchDataError());
      }
    },
    requestReset,
  };
};
