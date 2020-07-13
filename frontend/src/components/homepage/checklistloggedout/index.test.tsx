import React from "react";
import { mount, shallow } from "enzyme";
import Checklist from "./index";
import { Form } from "../../../models/Form";

describe("Checklist", () => {
  test("renders correctly", () => {
    const wrapper = mount(
      <Checklist
        title="Test Card Title"
        description="Test Card Description"
        forms={checklistCards}
      />
    );

    expect(wrapper.contains("Test Card Title")).toBeTruthy();
    expect(wrapper.contains("Test Card Description")).toBeTruthy();

    const cards = wrapper.find("FormCard");

    expect(cards).toHaveLength(3);
    expect(cards.contains("University Checklist")).toBeTruthy();
    expect(
      cards.contains("Start university with your best foot forward")
    ).toBeTruthy();
    expect(cards.contains("Explorer Checklist")).toBeTruthy();
    expect(
      cards.contains("Passport? Check. We’re ready for take off.")
    ).toBeTruthy();
    expect(cards.contains("Entertainment Checklist")).toBeTruthy();
    expect(
      cards.contains("Netflix and chill up and ready in 5 minutes.")
    ).toBeTruthy();
  });
});

const checklistCards: Form[] = [
  {
    id: 0,
    title: "University Checklist",
    description: "Start university with your best foot forward",
    url: ""
  },
  {
    id: 1,
    title: "Explorer Checklist",
    description: "Passport? Check. We’re ready for take off.",
    url: ""
  },
  {
    id: 2,
    title: "Entertainment Checklist",
    description: "Netflix and chill up and ready in 5 minutes.",
    url: ""
  }
];
