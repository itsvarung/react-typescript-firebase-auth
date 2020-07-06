import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import * as Styles from "./styles";

interface Props {
  activeSection: number;
  numberOfFormSections: number;
  handleNext: () => void;
  handleBack: () => void;
  handleSubmit: () => void;
}

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(3),
  },
}));

const FormNavigation: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Styles.ButtonWrapper>
      <Button
        disabled={props.activeSection === 0}
        onClick={props.handleBack}
        className={classes.backButton}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={
          props.activeSection === props.numberOfFormSections - 1
            ? props.handleSubmit
            : props.handleNext
        }
      >
        {props.activeSection === props.numberOfFormSections - 1
          ? "Finish"
          : "Next"}
      </Button>
    </Styles.ButtonWrapper>
  );
};

export default FormNavigation;
