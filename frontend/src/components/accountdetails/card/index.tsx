import React from "react";
import * as Styles from "./styles";
import { FormSection } from "../../../models/Form";
import * as User from "../../../models/User";
import UserDetailsTextField from "../textfield";
import { Grid } from "@material-ui/core";

interface Props {
  section: FormSection;
  user: User.User;
}

const Card: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Styles.Card key={props.section.typeOfData}>
        <Styles.H1>{props.section.title}</Styles.H1>
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
              />
            </Grid>
          ))}
        </Grid>
      </Styles.Card>
    </React.Fragment>
  );
};

export default Card;
