import React from "react";
import * as Styles from "./styles";
import * as Form from "../../models/Form";
import * as User from "../../models/User";
import FormTextField from "../../components/text-field";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const loginFormSection: Form.FormSection = {
  title: "Sign In",
  subtitle: "You're one step closer to form filling heaven",
  typeOfData: Form.TypeOfData.basicDetails,
  fields: [
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
    mobile: "",
    dob: "",
    password: "",
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const LoginPage = () => {
  //Current user object
  const [userDataState, updateUserDataState] = React.useState(newUser);

  const classes = useStyles();

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
              className={classes.root}
              variant="contained"
              style={{ backgroundColor: "#2d70d8", color: "#fff" }}
              onClick={() => {
                handleSubmit();
              }}
            >
              Sign In
            </Button>
          </Styles.ButtonsWrapper>
          <Styles.ButtonsWrapper>
            <Button
              className={classes.root}
              variant="outlined"
              style={{ border: "1px solid #2d70d8", color: "#2d70d8" }}
              onClick={() => {
                handleSubmit();
              }}
            >
              Sign Up
            </Button>
          </Styles.ButtonsWrapper>
        </form>
      </Styles.RightPageWrapper>
    </Styles.MainWrapper>
  );
};

export default LoginPage;
