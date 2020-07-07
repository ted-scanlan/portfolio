import { combineReducers } from "redux";

import { reducers as homeReducers } from "../home/index.js";
import { reducers as contactReducers } from "../contact/index.js";

const rootReducer = combineReducers({
  home: homeReducers,
  contact: contactReducers,
});

export default rootReducer;
