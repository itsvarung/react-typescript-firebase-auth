import React from "react";
import NavBar from "../../components/nav-bar";
import Header from "../../components/homepage/header";
import * as Styles from "./styles";
import { Form, InputType } from "../../models/Form";
import Checklist from "../../components/homepage/checklist";

interface Props {}

const HomePage: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <Styles.MainWrapper>
        <Header />
        <Checklist title="" description="" forms={checklistCards} />
        <Checklist
          title="University Checklist"
          description="Start university with your best foot forward"
          forms={checklistCards}
        />
      </Styles.MainWrapper>
    </React.Fragment>
  );
};

export default HomePage;

const checklistCards: Form[] = [
  {
    id: 0,
    title: "University Checklist",
    description: "Start university with your best foot forward",
    cardColor: "#1E2937",
    url: "form",
    progress: 10,
    formSections: [
      {
        title: "Basic Details",
        subtitle: "Tell us a little bit about you",
        fields: [
          {
            label: "First Name",
            helperText: "John",
            inputType: InputType.FIRSTNAME,
          },
          {
            label: "Last Name",
            helperText: "Doe",
            inputType: InputType.LASTNAME,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Explorer Checklist",
    description: "Passport? Check. We’re ready for take off.",
    cardColor: "#1E2937",
    url: "form",
    progress: 20,
    formSections: [],
  },
  {
    id: 2,
    title: "Entertainment Checklist",
    description: "Netflix and chill up and ready in 5 minutes.",
    cardColor: "#1E2937",
    url: "form",
    progress: 70,
    formSections: [],
  },
];
