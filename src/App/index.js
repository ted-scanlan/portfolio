import React from "react";
import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import styles from "./app.module.css";
import Home from "../pages/home/index.js";
import Header from "../components/Header/index.js";
import Footer from "../components/Footer/index.js";

import rootReducer from "../redux/rootReducer/index.js";

import { HashRouter, Route } from "react-router-dom";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk))); // configuring thunk middleware

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <div className={styles.footer}>
          <Footer className={styles.footer} />
        </div>
      </div>
    </HashRouter>
  </Provider>
);

export default App;
