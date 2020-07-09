import React from "react";
import NavBar from "../../components/nav-bar";
import * as Styles from "./styles";
import * as Form from "../../models/Form";
import * as User from "../../models/User";
import FormSection from "../../components/form/form-section";
import FormStepper from "../../components/form/stepper";
import FormNavigation from "../../components/form/navigation-buttons";

interface Props {
  form: Form.Form;
  user: User.User;
}

// Render the form page
// Parameters:
//  - form: the form you want to render which contains information about the different form sections and questions
//  - user: the current data we have on the user
const FormPage: React.FC<Props> = (props) => {
  //Current user object
  const [userDataState, updateUserDataState] = React.useState(newUser);

  //Current active form section that is visible on screen
  const [activeSection, setActiveSection] = React.useState(0);

  //Iterates the stepper and shows the next page
  const handleNext = () => {
    setActiveSection((prevActiveStep) => prevActiveStep + 1);
  };

  //De-iterates the stepper Goes back a page
  const handleBack = () => {
    setActiveSection((prevActiveStep) => prevActiveStep - 1);
  };

  //Handles submitting of the form when the form reaches the final page
  const handleSubmit = () => {
    setActiveSection(0);
  };

  //Handles any changes to form values
  const handleInputChange = (
    inputType: Form.InputType,
    e: React.ChangeEvent<any>
  ) => {
    //Get the current User Details Section that is being updated and update it with the new values
    const currentSectionOfUserDataBeingUpdated =
      userDataState[formSample.formSections[activeSection].typeOfData];
    currentSectionOfUserDataBeingUpdated[inputType] = e.target.value;

    //Update state with updated user details section
    updateUserDataState({
      ...userDataState,
      [formSample.formSections[activeSection]
        .typeOfData]: currentSectionOfUserDataBeingUpdated,
    });
  };

  return (
    <React.Fragment>
      <NavBar />
      <Styles.MainWrapper>
        <Styles.CenteredWrapper>
          <FormStepper
            activeSection={activeSection}
            formSections={formSample.formSections}
          />

          <FormSection
            user={userDataState}
            formSection={formSample.formSections[activeSection]}
            handleChange={handleInputChange}
          />

          <FormNavigation
            activeSection={activeSection}
            numberOfFormSections={formSample.formSections.length}
            handleBack={handleBack}
            handleNext={handleNext}
            handleSubmit={handleSubmit}
          />
        </Styles.CenteredWrapper>
      </Styles.MainWrapper>
    </React.Fragment>
  );
};

export default FormPage;

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
          label: "First Name",
          helperText: "John",
          inputType: Form.InputType.firstname,
        },
        {
          label: "Last Name",
          helperText: "Doe",
          inputType: Form.InputType.lastname,
        },
      ],
    },
    {
      typeOfData: Form.TypeOfData.basicDetails,
      title: "More Information",
      subtitle: "Tell us a little bit about you",
      fields: [
        {
          label: "Email",
          helperText: "John",
          inputType: Form.InputType.email,
        },
        {
          label: "Address",
          helperText: "Doe",
          inputType: Form.InputType.address,
        },
      ],
    },
    {
      typeOfData: Form.TypeOfData.basicDetails,
      title: "Last But Not Least",
      subtitle: "Tell us a little bit about you",
      fields: [
        {
          label: "Email",
          helperText: "John",
          inputType: Form.InputType.email,
        },
        {
          label: "Address",
          helperText: "Doe",
          inputType: Form.InputType.address,
        },
      ],
    },
  ],
};

var basicDetails: User.BasicDetails = {
  firstname: "Varun",
  lastname: "",
  email: "reach",
  address: "",
  mobile: "019312",
  dob: "",
  password: "",
};

var newUser: User.User = {
  basicDetails: basicDetails,
};
