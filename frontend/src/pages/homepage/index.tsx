import React, { useState, useEffect } from "react";
import NavBar from "../../components/nav-bar";
import Header from "../../components/homepage/header";
import HeaderLoading from "../../components/homepage/headerloading";
import HeaderLoggedOut from "../../components/homepage/headerloggedout";
import * as Styles from "./styles";
import { Form, InputType, TypeOfData } from "../../models/Form";
import Checklist from "../../components/homepage/checklist";
import { getCurrentFirstname, getForms } from "../../services/firebase";
import ChecklistLoggedOut from "../../components/homepage/checklistloggedout";
import "firebase/auth";
import "firebase/firestore";

interface Props {} // I see you

const HomePage: React.FC<Props> = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    getForms();
    const theName = getCurrentFirstname();
    theName ? setName(theName) : setName("");
    setLoading(false);
  }, []);

  return isLoading ? (
    <React.Fragment>
      <NavBar firstname={"Obi Wan"} />
      <Styles.MainWrapper>
        <HeaderLoading />
      </Styles.MainWrapper>
    </React.Fragment>
  ) : name ? (
    <React.Fragment>
      <NavBar firstname={getCurrentFirstname() || "stranger"} />
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
  ) : (
    <React.Fragment>
      <NavBar firstname={"stranger"} />
      <Styles.MainWrapper>
        <HeaderLoggedOut />
        <ChecklistLoggedOut title="" description="" forms={checklistCards} />
        <ChecklistLoggedOut
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
        typeOfData: TypeOfData.basicDetails,
        title: "Basic Details",
        subtitle: "Tell us a little bit about you",
        fields: [
          {
            label: "First Name",
            helperText: "John",
            inputType: InputType.firstname,
          },
          {
            label: "Last Name",
            helperText: "Doe",
            inputType: InputType.lastname,
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
