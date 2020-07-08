import React from "react";
import * as Form from "../../../models/Form";
import Grid from "@material-ui/core/Grid";
import FormTextField from "../../../components/form/text-field";
import * as Styles from "./styles";
import * as User from "../../../models/User";

interface Props {
  formSection: Form.FormSection;
  user: User.User;
  handleChange: (inputType: Form.InputType, e: React.ChangeEvent<any>) => void;
}

// Creates a component for a section of the current form you are viewing
// Parameters:
//  -  formSection: the section of the current form which you are trying to render
const FormSection: React.FC<Props> = (props) => {
  console.log("REFRESH");
  console.log(props.user);

  return (
    <React.Fragment>
      <Styles.HeaderAndSubHeaderWrapper>
        <Styles.H1>{props.formSection.title}</Styles.H1>
        <Styles.H2>{props.formSection.subtitle}</Styles.H2>
      </Styles.HeaderAndSubHeaderWrapper>

      <form>
        <Grid container spacing={3}>
          {props.formSection.fields.map((field) => (
            <Grid item xs={12} key={field.inputType}>
              <FormTextField
                formField={{
                  label: field.label,
                  helperText: field.helperText,
                  inputType: field.inputType,
                }}
                handleChange={props.handleChange}
                defaultValue={
                  props.user[Form.TypeOfData[props.formSection.typeOfData]][
                    field.inputType
                  ]
                }
              />
            </Grid>
          ))}
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default FormSection;
