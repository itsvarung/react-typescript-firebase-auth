import React from "react";
import TextField from "@material-ui/core/TextField";
import * as Form from "../../../models/Form";

interface Props {
  formField: Form.FormField;
  defaultValue: string;
}

// Creates a disabled textfield to display user details
// Parameters:
//  -  formField: the field within the form you are trying to create a text field for
const UserDetailsTextField: React.FC<Props> = (props) => {
  return (
    <TextField
      name={props.formField.inputType}
      id={props.formField.inputType}
      variant="outlined"
      label={props.formField.label}
      type="email"
      defaultValue={props.defaultValue}
      disabled
      fullWidth
    />
  );
};

export default UserDetailsTextField;
