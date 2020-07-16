import React from "react";
import NavBar from "../../components/nav-bar";
import HeaderLoggedOut from "../../components/accountdetails/headerloggedout";
import * as Styles from "./styles";
import { getCurrentFirstname } from "../../services/firebase";
import "firebase/auth";
import "firebase/firestore";
import * as User from "../../models/User";
import * as Form from "../../models/Form";
import Card from "../../components/accountdetails/card";

interface Props {
  user: User.User;
  forms: Form.Form;
}

const AccountDetails: React.FC<Props> = (props) => {
  const name = "Jon";

  //Current user object
  const [userDataState, updateUserDataState] = React.useState(newUser);

  //Handles any changes to form values
  const handleInputChange = (
    formSection: Form.FormSection,
    inputType: Form.InputType,
    e: React.ChangeEvent<any>
  ) => {
    //Get the current User Details Section that is being updated and update it with the new values
    const currentSectionOfUserDataBeingUpdated =
      userDataState[formSection.typeOfData];
    currentSectionOfUserDataBeingUpdated[inputType] = e.target.value;

    //Update state with updated user details section
    updateUserDataState({
      ...userDataState,
      [formSection.typeOfData]: currentSectionOfUserDataBeingUpdated,
    });
  };

  //Submits changes to firestore
  const submitChanges = () => {
    console.log("submitted");
  };

  return name ? (
    // If user is logged in show them:
    <React.Fragment>
      <NavBar firstname={getCurrentFirstname() || "stranger"} />
      <Styles.MainWrapper>
        <Styles.CenteredWrapper>
          {formSample.formSections.map((section) => (
            <Card
              user={newUser}
              section={section}
              key={section.typeOfData}
              handleChange={handleInputChange}
              submitChanges={submitChanges}
            />
          ))}
        </Styles.CenteredWrapper>
      </Styles.MainWrapper>
    </React.Fragment>
  ) : (
    // If user is not logged in show them a log in screen
    <React.Fragment>
      <NavBar firstname={"stranger"} />
      <Styles.MainWrapper>
        <HeaderLoggedOut />
      </Styles.MainWrapper>
    </React.Fragment>
  );
};

export default AccountDetails;

const newUser: User.User = {
  basicDetails: {
    firstname: "Jordan",
    lastname: "Henderson",
    email: "bad@awful.com",
    address: "121 ManUre Street",
    phone: "077635786537",
    dob: "01/01/2018",
    password: "BAD",
  },
};

const formSample: Form.Form = {
  id: 0,
  title: "University Checklist",
  description: "Start university with your best foot forward",
  cardColor: "#1E2937",
  url: "form",
  progress: 10,
  formSections: [
    {
      typeOfData: Form.TypeOfData.basicDetails,
      title: "Basic Details",
      subtitle: "Tell us a little bit about you",
      fields: [
        {
          label: "Firstname",
          helperText: "Joe",
          inputType: Form.InputType.firstname,
        },
        {
          label: "Lastname",
          helperText: "Bloggs",
          inputType: Form.InputType.lastname,
        },
        {
          label: "Email",
          helperText: "joe.bloggs@email.com",
          inputType: Form.InputType.email,
        },
        {
          label: "Address",
          helperText: "123 New Street",
          inputType: Form.InputType.address,
        },
        {
          label: "Phone",
          helperText: "07745360809",
          inputType: Form.InputType.phone,
        },
        {
          label: "Dob",
          helperText: "01/01/2000",
          inputType: Form.InputType.dob,
        },
        {
          label: "Password",
          helperText: "j1233",
          inputType: Form.InputType.password,
        },
      ],
    },
  ],
};
