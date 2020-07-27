import React from "react";

import { setupTestComponent } from "../../setupTests";
import ErrorMessage from ".";

const setUpTest = setupTestComponent({
  render: () => <ErrorMessage>This is a test error message</ErrorMessage>,
});

describe("ErrorMessage", () => {
  it("renders correct className", () => {
    const { wrapper } = setUpTest();
    console.log(wrapper.debug());
    expect(wrapper.find('[data-qa="error"]')).toHaveClassName("error");
  });

  it("renders text as children", () => {
    const { wrapper } = setUpTest();
    expect(wrapper.find('[data-qa="error"]')).toHaveText(
      "This is a test error message"
    );
  });
  it("renders text as small and black", () => {
    const { wrapper } = setUpTest();
    expect(wrapper.find('[data-qa="text"]')).toHaveClassName("SMALL");
    expect(wrapper.find('[data-qa="text"]')).toHaveClassName("BLACK");
  });
});
