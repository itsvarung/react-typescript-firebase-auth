import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import * as Form from "../../../models/Form";

interface Props {
  activeSection: number;
  formSections: Form.FormSection[];
}

const FormStepper: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Stepper activeStep={props.activeSection} alternativeLabel>
        {props.formSections.map((section) => (
          <Step key={section.title}>
            <StepLabel>{section.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </React.Fragment>
  );
};

export default FormStepper;
