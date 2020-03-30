import React from "react";
import Card from "./index";
import { shallow } from "enzyme";

describe("Form Card", () => {
  test("renders correctly", () => {
    const wrapper = shallow(
      <Card
        title="Test Card Title"
        description="Test Card Description"
        cardColor="#1E2937"
      />
    );

    expect(wrapper.childAt(0).text()).toBe("Test Card Title");
    expect(wrapper.childAt(1).text()).toBe("Test Card Description");
  });
});
