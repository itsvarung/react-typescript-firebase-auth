import React, { useState } from "react";
import * as Styles from "./styles";
import * as Form from "../../../models/Form";
import * as User from "../../../models/User";
import UserDetailsTextField from "../textfield";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";

interface Props {
  section: Form.FormSection;
  user: User.User;
  handleChange: (
    formSection: Form.FormSection,
    inputType: Form.InputType,
    e: React.ChangeEvent<any>
  ) => void;
  submitChanges: () => void;
}

const Card: React.FC<Props> = (props) => {
  //a variable that keeps track of whether the current card is in editing mode or not
  const [isEditing, setIsEditing] = useState(false);

  //Handles enabling and disabling editing mode.
  //If the user is in editing mode and clicks the done button,
  //the submit function is called to push data to firebase
  function toggleIsEditing() {
    if (isEditing === true) {
      props.submitChanges();
    }
    setIsEditing(!isEditing);
  }

  //Handles a change in user input and calls the parent components handleChange function
  //Parameters
  //  - inputType: the type of data that has just been altered
  //  - e: the event that just took place and the html component that it took place in
  function handleChangeInput(
    inputType: Form.InputType,
    e: React.ChangeEvent<any>
  ) {
    props.handleChange(props.section, inputType, e);
  }

  return (
    <React.Fragment>
      <Styles.Card>
        {/* The title and edit button of the card */}
        <Grid container spacing={0}>
          <Grid item xs={11}>
            <Styles.H1>{props.section.title}</Styles.H1>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => {
                toggleIsEditing();
              }}
            >
              {isEditing ? <CheckIcon /> : <EditIcon />}
            </IconButton>
          </Grid>
        </Grid>

        {/* Form Fields */}
        <Grid container spacing={3}>
          {props.section.fields.map((field) => (
            <Grid item xs={12} key={field.inputType}>
              <UserDetailsTextField
                formField={{
                  label: field.label,
                  helperText: field.helperText,
                  inputType: field.inputType,
                }}
                defaultValue={props.user.basicDetails[field.inputType]}
                isDisabled={isEditing}
                handleChange={(
                  inputType: Form.InputType,
                  e: React.ChangeEvent<any>
                ) => {
                  handleChangeInput(inputType, e);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Styles.Card>
    </React.Fragment>
  );
};

export default Card;
