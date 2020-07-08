import React from "react";
import TextField from "@material-ui/core/TextField";
import * as Form from "../../../models/Form";

interface Props {
  formField: Form.FormField;
  defaultValue: string;
  handleChange: (inputType: Form.InputType, e: React.ChangeEvent<any>) => void;
}

// Creates a textfield
// Parameters:
//  -  formField: the field within the form you are trying to create a text field for
const FormTextField: React.FC<Props> = (props) => {
  return (
    <TextField
      name={props.formField.inputType}
      id={props.formField.inputType}
      variant="outlined"
      label={props.formField.label}
      type="email"
      defaultValue={props.defaultValue}
      onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
        props.handleChange(props.formField.inputType, ev)
      }
      fullWidth
    />
  );
};

export default FormTextField;
