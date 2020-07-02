import React from "react";

import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";

import Header from "./index.js";

configure({ adapter: new Adapter() });
describe("Header component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Header />);
  });
  it("should render header with correct className", () => {
    expect(wrapper.find('[data-qa="header"]').hasClass("header")).toEqual(true);
  });
  it("should render correct name as a h1 tag", () => {
    expect(
      wrapper.find('[data-id="nameContainer"] h1[data-qa="text"]').text()
    ).toEqual("Ted Scanlan");
  });
  it("should render correct job title as a h1 tag", () => {
    expect(wrapper.find('[data-id="job"] h1[data-qa="text"]').text()).toEqual(
      "Software Developer"
    );
  });
  it("should render nav text as a h1 tag", () => {
    expect(wrapper.find('[data-id="nav"] h1[data-qa="text"]').text()).toEqual(
      "Contact"
    );
  });

  // also need to test links when i put them in
});
