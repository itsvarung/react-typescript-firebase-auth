import React from "react";
import TextField from "@material-ui/core/TextField";
import * as Form from "../../../models/Form";

interface Props {
  formField: Form.FormField;
  defaultValue: string;
  isDisabled: Boolean;
  handleChange: (inputType: Form.InputType, e: React.ChangeEvent<any>) => void;
}

// Creates a disabled textfield to display user details
// Parameters:
//  -  formField: the field within the form you are trying to create a text field for
const UserDetailsTextField: React.FC<Props> = (props) => {
  //If the text field is disabled, create a disabled text field compoenent
  return props.isDisabled ? (
    <TextField
      name={props.formField.inputType}
      id={props.formField.inputType}
      variant="outlined"
      label={props.formField.label}
      type="email"
      defaultValue={props.defaultValue}
      fullWidth
      onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
        props.handleChange(props.formField.inputType, ev)
      }
    />
  ) : (
    //Else create a text field which is not disabled
    <TextField
      name={props.formField.inputType}
      id={props.formField.inputType}
      variant="outlined"
      label={props.formField.label}
      type="email"
      defaultValue={props.defaultValue}
      disabled
      fullWidth
      onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
        props.handleChange(props.formField.inputType, ev)
      }
    />
  );
};

export default UserDetailsTextField;
