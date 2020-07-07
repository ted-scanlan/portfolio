import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import styles from "./app.module.css";
import Home from "../pages/home/index.js";
import Contact from "../pages/contact/index.js";

import Header from "../components/Header/index.js";
import Footer from "../components/Footer/index.js";

import rootReducer from "../redux/rootReducer/index.js";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk))); // configuring thunk middleware

export default () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <div className={styles.footer}>
        <Footer className={styles.footer} />
      </div>
    </Router>
  </Provider>
);
