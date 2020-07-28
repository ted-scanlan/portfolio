// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "@testing-library/jest-dom/extend-expect";
import { mount } from "enzyme";
import "jest-enzyme";
import moxios from "moxios";
import { createStore, compose, applyMiddleware } from "redux";

import { MemoryRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { act } from "react-dom/test-utils";

import rootReducer from "./redux/rootReducer/index.js";

configure({ adapter: new Adapter() });

export const setupTestComponent = ({
  render: baseRender,
  props: baseProps,
} = {}) => ({ render: testRender, props: testProps } = {}) => {
  const render = testRender || baseRender;
  const props = testProps || baseProps;
  return {
    wrapper: mount(
      <MemoryRouter>{React.cloneElement(render(), props)}</MemoryRouter>
    ),
  };
};

// below this allows us to test components which use redux.
export const setupTestProvider = ({
  render: baseRender,
  prerender: basePrerender = () => {},
  props: baseProps,
} = {}) => ({
  render: testRender,
  props: testProps,
  prerender: testPrerender = () => {},
  path: testPath,
} = {}) => {
  const render = testRender || baseRender;
  const props = testProps || baseProps;
  const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));
  let history;
  basePrerender(store);
  testPrerender(store);

  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <Route
          render={({ history: _history }) => {
            history = _history;
            return React.cloneElement(render(), props);
          }}
        />
      </Provider>
    </MemoryRouter>
  );

  return {
    wrapper,
    store,
    history,
  };
};
