import React from "react";

import { setupTestComponent } from "../../setupTests";
import Image from ".";

const requiredProps = {
  src: "test.png",
  alt: "test image",
};

const setUpTest = setupTestComponent({
  render: () => <Image {...requiredProps} />,
});

describe("image component", () => {
  it("renders image with classname img", () => {
    const { wrapper } = setUpTest();

    expect(wrapper.find("img")).toHaveClassName("img");
  });
  it("should render image tag with correct src", () => {
    const { wrapper } = setUpTest();

    expect(wrapper.find("img").prop("src")).toEqual("test.png");
  });
  it("should render image tag with correct alt", () => {
    const { wrapper } = setUpTest();

    expect(wrapper.find("img").prop("alt")).toEqual("test image");
  });

  it("renders a data-id", () => {
    const { wrapper } = setUpTest({
      props: {
        dataId: "testy mctestface",
      },
    });
    expect(wrapper.find('picture[data-id="testy mctestface"]').length).toBe(1);
  });
  it("renders correct sources", () => {
    const { wrapper } = setUpTest({
      props: {
        sources: [
          {
            srcSet: "testSrc1",
            width: 580,
          },
          {
            srcSet: "testSrc2",
            width: 1536,
          },
        ],
      },
    });

    expect(wrapper.find('Source[srcSet="testSrc1"]').length).toBe(1);
    expect(wrapper.find('Source[srcSet="testSrc1"]').prop("width")).toEqual(
      580
    );
    expect(wrapper.find('Source[srcSet="testSrc2"]').length).toBe(1);
    expect(wrapper.find('Source[srcSet="testSrc2"]').prop("width")).toEqual(
      1536
    );
  });
});
