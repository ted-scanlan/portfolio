import React from "react";
import { act } from "react-dom/test-utils";

// import { routes } from "../../lib/constants";

import { setupTestProvider, setupTestComponent } from "../../setupTests";
import Header from ".";

const setupTest = setupTestProvider({
  render: () => <Header />,
});

describe("Components: Header", () => {
  it("should render Header with correct className", () => {
    const { wrapper } = setupTest();
    console.log(wrapper.debug());
    expect(wrapper.find('[data-qa="header"]')).toHaveClassName("header");
  });
  it("should render correct name as a h1 tag", () => {
    const { wrapper } = setupTest();
    expect(
      wrapper.find('[data-qa="header"] div[data-id="nameContainer"]').text()
    ).toEqual("Ted Scanlan");
  });
  it("should render correct job title as a h1 tag", () => {
    const { wrapper } = setupTest();

    expect(
      wrapper.find('[data-qa="header"] Text[data-id="job"]').text()
    ).toEqual("Software Developer");
  });
  it("should render nav text as a h1 tag", () => {
    const { wrapper } = setupTest();
    expect(wrapper.find('[data-id="nav"] h1[data-qa="text"]').text()).toEqual(
      "Contact"
    );
  });
  // it('should link to home when name is clicked', () => {
  //   const { wrapper } = setupTest();

  // })
});
