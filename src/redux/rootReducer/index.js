import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { reducers as homeReducers, name as home } from "../home/index.js";
import { reducers as contactReducers } from "../contact/index.js";
import { reducers as projectReducers } from "../projects/index.js";

const rootReducer = combineReducers({
  home: homeReducers,
  contact: contactReducers,
  projects: projectReducers,
  routing: routerReducer,
});

export default rootReducer;
