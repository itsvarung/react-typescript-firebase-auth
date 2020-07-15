import React, { useState, useEffect } from "react";
import NavBar from "../../components/nav-bar";
import HeaderLoading from "../../components/accountdetails/headerloading";
import HeaderLoggedOut from "../../components/accountdetails/headerloggedout";
import * as Styles from "./styles";
import { getCurrentFirstname } from "../../services/firebase";
import "firebase/auth";
import "firebase/firestore";
import { useHistory } from "react-router-dom";
import * as User from "../../models/User";
import * as Form from "../../models/Form";
import FormTextField from "../../components/text-field";
import Grid from "@material-ui/core/Grid";

interface Props {
  userDeets: User.User;
}

const detailsFormSection: Form.FormSection = {
  title: "Your Details",
  subtitle: "Basic Details",
  typeOfData: Form.TypeOfData.basicDetails,
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
};

const AccountDetails: React.FC<Props> = (props) => {
  const [userDataState, updateUserDataState] = React.useState(newUser);

  //Handles any changes to form values
  const handleInputChange = (
    inputType: Form.InputType,
    e: React.ChangeEvent<any>
  ) => {
    //Get the current User Details Section that is being updated and update it with the new values
    const currentSectionOfUserDataBeingUpdated =
      userDataState[detailsFormSection.typeOfData];
    currentSectionOfUserDataBeingUpdated[inputType] = e.target.value;

    //Update state with updated user details section
    updateUserDataState({
      ...userDataState,
      [detailsFormSection.typeOfData]: currentSectionOfUserDataBeingUpdated,
    });
  };

  const history = useHistory();
  const name = "Jon";
  console.log(typeof newUser.basicDetails);

  // const searchDetails = newUser.basicDetails;

  return name ? (
    // If user is logged in show them:
    <React.Fragment>
      <NavBar firstname={getCurrentFirstname() || "stranger"} />
      <Grid container spacing={3}>
        {detailsFormSection.fields.map((field) => (
          <Grid item xs={6} key={field.inputType}>
            <FormTextField
              formField={{
                label: field.label,
                helperText: field.helperText,
                inputType: field.inputType,
              }}
              handleChange={handleInputChange}
              defaultValue={newUser.basicDetails[field.inputType]}
            />
          </Grid>
        ))}
      </Grid>
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
