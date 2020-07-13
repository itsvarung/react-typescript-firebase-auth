import React, { useState, useEffect } from "react";
import NavBar from "../../components/nav-bar";
import Header from "../../components/accountdetails/header";
import HeaderLoading from "../../components/accountdetails/headerloading";
import HeaderLoggedOut from "../../components/accountdetails/headerloggedout";
import Section from "../../components/accountdetails/section";
import * as Styles from "./styles";
import { Form, InputType, TypeOfData } from "../../models/Form";
import firebase from "../../components/firebase";
import "firebase/auth";
import "firebase/firestore";
import Button from "@material-ui/core/Button";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { useHistory } from "react-router-dom";

interface Props {}

const AccountDetails: React.FC<Props> = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    const theName = firebase.getCurrentFirstname();
    theName ? setName(theName) : setName("");
    setLoading(false);
  }, []);

  const history = useHistory();

  const handleSignIn = () => {
    history.push("/login");
  };

  const handleSignUp = () => {
    history.push("/signup");
  };

  return isLoading ? (
    <React.Fragment>
      <NavBar firstname={"Obi Wan"} />
      <Styles.MainWrapper>
        <HeaderLoading />
      </Styles.MainWrapper>
    </React.Fragment>
  ) : name ? (
    <React.Fragment>
      <NavBar firstname={firebase.getCurrentFirstname() || "stranger"} />
      <Styles.MainWrapper>
        <Header />
        <Section title="" description="" forms={formDetails} />
      </Styles.MainWrapper>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <NavBar firstname={"stranger"} />
      <Styles.MainWrapper>
        <HeaderLoggedOut />
      </Styles.MainWrapper>
    </React.Fragment>
  );
};

export default AccountDetails;

const formDetails: Form[] = [
  {
    id: 0,
    title: "Basic Details",
    description: "Alexander or Alexandra? Check your basic details here.",
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
    title: "Address Details",
    description:
      "Couldn't wait to leave six months ago? Check your address here.",
    cardColor: "#1E2937",
    url: "form",
    progress: 20,
    formSections: [],
  },
  {
    id: 2,
    title: "NHS Details",
    description:
      "Thought you were an A+ student, but turns out you're more B-? Check your NHS inputs here.",
    cardColor: "#1E2937",
    url: "form",
    progress: 70,
    formSections: [],
  },
];
