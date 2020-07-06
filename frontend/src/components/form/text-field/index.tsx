import React from "react";
import TextField from "@material-ui/core/TextField";
import * as Form from "../../../models/Form";

interface Props {
  formField: Form.FormField;
}

// Creates a textfield
// Parameters:
//  -  formField: the field within the form you are trying to create a text field for
const FormTextField: React.FC<Props> = (props) => {
  return (
    <TextField
      id={props.formField.inputType}
      variant="outlined"
      label={props.formField.label}
      type="email"
      fullWidth
    />
  );
};

export default FormTextField;
