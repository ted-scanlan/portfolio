import React from "react";

import { setupTestComponent } from "../../setupTests";
import Loader from ".";

const setUpTest = setupTestComponent({
  render: () => <Loader />,
});

describe("loader component", () => {
  it("loads component with className", () => {
    const { wrapper } = setUpTest();
    expect(wrapper.find('[data-qa="loaderContainer"]')).toHaveClassName(
      "loaderContainer"
    );
  });
});
