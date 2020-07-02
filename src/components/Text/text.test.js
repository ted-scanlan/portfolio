import React from "react";

import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";

import Text from "./index.js";

const requiredProps = {
  children: "example text",
  dataId: "title",
};

configure({ adapter: new Adapter() });
describe("Text component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Text {...requiredProps} />);
  });
  it("should render", () => {
    expect(wrapper.find('[data-qa="text"]')).toHaveLength(1);
    expect(wrapper.find('[data-qa="text"]').text()).toEqual("example text");
  });

  it("renders correct className of text", () => {
    expect(wrapper.find('[data-qa="text"]').hasClass("text")).toEqual(true);
  });
  it("renders a default text p element", () => {
    expect(wrapper.find('p[data-qa="text"]')).toBeTruthy();
  });
  it("renders small text by default", () => {
    expect(wrapper.find('[data-qa="text"]').hasClass("SMALL")).toEqual(true);
  });
  it("renders black text by default", () => {
    expect(wrapper.find('[data-qa="text"]').hasClass("BLACK")).toEqual(true);
  });
  it("renders text with data id", () => {
    expect(wrapper.find('[data-id="title"]')).toBeTruthy();
  });
});
