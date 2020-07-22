import React, { useState, useEffect } from "react";
import NavBar from "../../components/nav-bar";
import Header from "../../components/homepage/header";
import HeaderLoggedOut from "../../components/homepage/headerloggedout";
import * as Styles from "./styles";
import { Form, TypeOfData, BasicDetailsInputType } from "../../models/Form";
import Checklist from "../../components/homepage/checklist";
import { getCurrentFirstname, getForms } from "../../services/firebase";
import CircularIndeterminate from "../../components/homepage/loading";
import "firebase/auth";
import "firebase/firestore";
import { useHistory } from "react-router-dom";

interface Props {} // I see you

const HomePage: React.FC<Props> = (props) => {
  const history = useHistory();

  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [forms, setForms] = useState<Form[]>([]);

  useEffect(() => {
    getData();
    const theName = getCurrentFirstname();
    theName ? setName(theName) : setName("");
    setLoading(false);
    console.log("Speed Test");
  }, []);

  async function getData() {
    const fetchedForms: Form[] = await getForms();
    setForms(fetchedForms);
    console.log(fetchedForms);
  }

  const handleFormSelection = (formId: number) => {
    history.push(`/form/${formId}`);
  };

  return forms.length !== 0 ? (
    <React.Fragment>
      <NavBar firstname={getCurrentFirstname() || "stranger"} />
      <Styles.MainWrapper>
        <Header />
        <Checklist
          title="Checklists"
          description="Easy groups to get you started."
          forms={checklistCards}
          handleFormSelection={handleFormSelection}
        />
        <Checklist
          title="All Forms"
          description="Is it me you're looking for?"
          forms={forms}
          handleFormSelection={handleFormSelection}
        />
      </Styles.MainWrapper>
    </React.Fragment>
  ) : (
    <CircularIndeterminate />
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
            inputType: BasicDetailsInputType.firstname,
          },
          {
            label: "Last Name",
            helperText: "Doe",
            inputType: BasicDetailsInputType.lastname,
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
