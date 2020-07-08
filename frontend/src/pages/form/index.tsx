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

const FormPage: React.FC<Props> = (props) => {
  const [userData, updateUserData] = React.useState(newUser);
  const [activeSection, setActiveSection] = React.useState(0);

  const handleNext = () => {
    setActiveSection((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveSection((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    setActiveSection(0);
  };

  const handleInputChange = (
    inputType: Form.InputType,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    //Get the current User Details Section that is being updated and update it with the new values
    const currentSectionOfUserDataBeingUpdated =
      userData[formSample.formSections[activeSection].typeOfData];
    currentSectionOfUserDataBeingUpdated[inputType] = e.target.value;

    //Update state with updated user details section
    updateUserData({
      ...userData,
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
            user={userData}
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
};

var newUser: User.User = {
  basicDetails: basicDetails,
};
