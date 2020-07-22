import React from "react";
import { Form } from "../../../models/Form";
import * as Styles from "./styles";
import FormCard from "../form-card";
import Grid from "@material-ui/core/Grid";

interface Props {
  title: String;
  description: String;
  forms: Form[];
  handleFormSelection: (formId: number) => void;
}

const Checklist: React.FC<Props> = (props) => {
  return (
    <Styles.CenteredWrapper>
      <Styles.HeaderAndSubHeaderWrapper>
        <Styles.H1>{props.title}</Styles.H1>
        <Styles.H2>{props.description}</Styles.H2>
      </Styles.HeaderAndSubHeaderWrapper>
      <Grid container spacing={3}>
        {props.forms.map((form) => (
          <Grid item xs={4} key={form.id}>
            <FormCard
              form={form}
              handleFormSelection={(formId) => {
                props.handleFormSelection(formId);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Styles.CenteredWrapper>
  );
};

export default Checklist;
