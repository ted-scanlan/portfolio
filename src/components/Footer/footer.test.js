import React from "react";

import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";

import Footer from "./index.js";

configure({ adapter: new Adapter() });
describe("Header component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Footer />);
  });
  it("should render footer with correct className", () => {
    expect(wrapper.find('[data-qa="footer"]').hasClass("footer")).toEqual(true);
  });
  it("should render correct name as a p tag", () => {
    expect(wrapper.find('[data-id="name"] p[data-qa="text"]').text()).toEqual(
      "Ted Scanlan"
    );
  });
  it("should render correct number as a p tag", () => {
    expect(wrapper.find('[data-id="number"] p[data-qa="text"]').text()).toEqual(
      "07964704890"
    );
  });
});
