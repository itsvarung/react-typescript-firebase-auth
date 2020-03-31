import React from "react";
import { Form } from "../../../models/Form";
import * as Styles from "./styles";
import FormCard from "../form-card";
import Grid from "@material-ui/core/Grid";

interface Props {
  title: String;
  description: String;
  forms: Form[];
}

const Checklist: React.FC<Props> = props => {
  return (
    <Styles.CenteredWrapper>
      <Styles.H1>{props.title}</Styles.H1>
      <Styles.H2>{props.description}</Styles.H2>
      <Grid container spacing={3}>
        {props.forms.map(form => (
          <Grid item xs={4} key={form.id}>
            <FormCard
              title={form.title}
              description={form.description}
              cardColor={form.cardColor}
            />
          </Grid>
        ))}
      </Grid>
    </Styles.CenteredWrapper>
  );
};

export default Checklist;
