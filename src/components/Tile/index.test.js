import React from "react";

import { setupTestComponent } from "../../setupTests";
import Tile from ".";

const setUpTest = setupTestComponent({
  render: () => <Tile>contents of tile</Tile>,
});

describe("tile component", () => {
  it("renders the content inside the tile", () => {
    const { wrapper } = setUpTest();
    expect(wrapper.find("div")).toHaveText("contents of tile");
  });
  it("renders tile with correct classname", () => {
    const { wrapper } = setUpTest();
    expect(wrapper.find('[data-qa="tile"]')).toHaveClassName("tile");
  });
});
