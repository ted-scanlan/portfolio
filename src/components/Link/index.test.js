import React from "react";
import { act } from "react-dom/test-utils";

import { setupTestComponent, setupTestProvider } from "../../setupTests";
import Link from ".";

const requiredProps = {
  href: "/www.test.com",
};

const setUpTestString = setupTestComponent({
  render: () => <Link {...requiredProps}>yo im a link</Link>,
});

const setUpTestNode = setupTestProvider({
  render: () => (
    <Link {...requiredProps}>
      <div>yo im a link</div>
    </Link>
  ),
});

describe("Link component", () => {
  it("should render link if children is string", () => {
    const { wrapper } = setUpTestString();
    expect(wrapper.find("a").prop("href")).toEqual(requiredProps.href);
  });

  it("should render link if children is node", () => {
    const { wrapper } = setUpTestNode();
    expect(wrapper.find("a").prop("href")).toEqual(requiredProps.href);
  });

  it("should render anchor links with corrects extenral link and attributes", () => {
    const { wrapper } = setUpTestString({
      props: {
        href: "test",
        isAnchor: true,
      },
    });
    expect(wrapper.find("a").prop("target")).toEqual("_blank");
    expect(wrapper.find("a").prop("rel")).toEqual("noopener noreferrer");
    expect(wrapper.find('[data-qa="link"] a')).toHaveClassName("link");
  });

  it("calls react router with correct href", () => {
    const { wrapper, history } = setUpTestNode();
    act(() => {
      wrapper.find('[data-qa="link"] a').simulate("click", { button: 0 });
    });
    expect(history.location.pathname).toEqual(requiredProps.href);
  });

  it("renders a data-id", () => {
    const { wrapper } = setUpTestNode({
      props: {
        dataId: "test",
      },
    });
    expect(wrapper.find('span[data-id="test"]')).toExist();
  });
});
