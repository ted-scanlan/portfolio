import { combineReducers } from "redux";

import { reducers as homeReducers } from "../home/index.js";

const rootReducer = combineReducers({
  home: homeReducers,
});

export default rootReducer;
