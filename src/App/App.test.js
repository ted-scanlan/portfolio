import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./index.js";

describe("App", () => {
  it("renders the app", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
