import React from "react";
import NavBar from "../../components/nav-bar";
import * as Styles from "./styles";
import * as Form from "../../models/Form";
import FormSection from "../../components/form/form-section";
import FormStepper from "../../components/form/stepper";
import FormNavigation from "../../components/form/navigation-buttons";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

interface Props {
  form: Form.Form;
}

const FormPage: React.FC<Props> = (props) => {
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

  return (
    <React.Fragment>
      <NavBar />
      <Styles.MainWrapper>
        <Styles.CenteredWrapper>
          <FormStepper
            activeSection={activeSection}
            formSections={formSample.formSections}
          />

          <FormSection formSection={formSample.formSections[activeSection]} />

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
      title: "Basic Details",
      subtitle: "Tell us a little bit about you",
      fields: [
        {
          label: "First Name",
          helperText: "John",
          inputType: Form.InputType.FIRSTNAME,
        },
        {
          label: "Last Name",
          helperText: "Doe",
          inputType: Form.InputType.LASTNAME,
        },
      ],
    },
    {
      title: "More Information",
      subtitle: "Tell us a little bit about you",
      fields: [
        {
          label: "Email",
          helperText: "John",
          inputType: Form.InputType.EMAIL,
        },
        {
          label: "Address",
          helperText: "Doe",
          inputType: Form.InputType.ADDRESS,
        },
      ],
    },
    {
      title: "Last But Not Least",
      subtitle: "Tell us a little bit about you",
      fields: [
        {
          label: "Email",
          helperText: "John",
          inputType: Form.InputType.EMAIL,
        },
        {
          label: "Address",
          helperText: "Doe",
          inputType: Form.InputType.ADDRESS,
        },
      ],
    },
  ],
};
