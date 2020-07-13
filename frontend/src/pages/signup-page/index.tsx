import React from "react";
import * as Styles from "./styles";
import * as Form from "../../models/Form";
import * as User from "../../models/User";
import FormTextField from "../../components/text-field";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { signUp } from "../../services/firebase";
import "firebase/auth";
import "firebase/firestore";
import { useHistory } from "react-router-dom";

const loginFormSection: Form.FormSection = {
  title: "Register",
  subtitle: "You're one step closer to form filling heaven",
  typeOfData: Form.TypeOfData.basicDetails,
  fields: [
    {
      label: "First Name",
      helperText: "John",
      inputType: Form.InputType.firstname,
    },
    {
      label: "Last Name",
      helperText: "Doe",
      inputType: Form.InputType.lastname,
    },
    {
      label: "Email Address",
      helperText: "john@email.com",
      inputType: Form.InputType.email,
    },
    {
      label: "Password",
      helperText: "j1233",
      inputType: Form.InputType.password,
    },
  ],
};

const newUser: User.User = {
  basicDetails: {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    dob: "",
    password: "",
  },
};

const SignUpPage = () => {
  //Current user object
  const [userDataState, updateUserDataState] = React.useState(newUser);

  const history = useHistory();

  //Handles any changes to form values
  const handleInputChange = (
    inputType: Form.InputType,
    e: React.ChangeEvent<any>
  ) => {
    //Get the current User Details Section that is being updated and update it with the new values
    const currentSectionOfUserDataBeingUpdated =
      userDataState[loginFormSection.typeOfData];
    currentSectionOfUserDataBeingUpdated[inputType] = e.target.value;

    //Update state with updated user details section
    updateUserDataState({
      ...userDataState,
      [loginFormSection.typeOfData]: currentSectionOfUserDataBeingUpdated,
    });
  };

  const handleSubmit = () => {};

  async function onRegister() {
    try {
      await signUp(
        userDataState.basicDetails.firstname,
        userDataState.basicDetails.email,
        userDataState.basicDetails.password
      );
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Styles.MainWrapper>
      <Styles.LeftPageWrapper>
        <Styles.LeftPageHeadingWrapper>
          <Styles.H1Left> Welcome To Una</Styles.H1Left>
          <Styles.H2Left>
            {" "}
            Form filling just got a whole lot simpler.
          </Styles.H2Left>
        </Styles.LeftPageHeadingWrapper>
      </Styles.LeftPageWrapper>

      <Styles.RightPageWrapper>
        <Styles.RightPageHeadingWrapper>
          <Styles.H1Right>{loginFormSection.title}</Styles.H1Right>
          <Styles.H2Right>{loginFormSection.subtitle}</Styles.H2Right>
        </Styles.RightPageHeadingWrapper>

        <form>
          <Grid container spacing={3}>
            {loginFormSection.fields.map((field) => (
              <Grid item xs={12} key={field.inputType}>
                <FormTextField
                  formField={{
                    label: field.label,
                    helperText: field.helperText,
                    inputType: field.inputType,
                  }}
                  handleChange={handleInputChange}
                  defaultValue=""
                />
              </Grid>
            ))}
          </Grid>
          <Styles.ButtonsWrapper>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#2d70d8",
                color: "#fff",
                height: "50px",
              }}
              onClick={() => {
                onRegister();
              }}
            >
              Register
            </Button>
          </Styles.ButtonsWrapper>
          <Styles.ButtonsWrapper>
            <Button
              variant="outlined"
              style={{
                border: "1px solid #2d70d8",
                color: "#2d70d8",
                height: "50px",
              }}
              onClick={() => {
                handleSubmit();
              }}
            >
              Sign In
            </Button>
          </Styles.ButtonsWrapper>
        </form>
      </Styles.RightPageWrapper>
    </Styles.MainWrapper>
  );
};

export default SignUpPage;
