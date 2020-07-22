import React from "react";
import { Card, CardH1, CardH2, TextWrapper, ViewMoreLink } from "./styles";
import { ProgressBar } from "./progress-bar";
import { Form } from "../../../models/Form";
import Button from "@material-ui/core/Button";

interface Props {
  form: Form;
  handleFormSelection: (formId: number) => void;
}

const FormCard: React.FC<Props> = (props) => {
  return (
    <Card>
      <TextWrapper>
        <div>
          <CardH1>{props.form.title}</CardH1>
          <CardH2>{props.form.description}</CardH2>
          <Button
            color="primary"
            onClick={() => {
              props.handleFormSelection(props.form.id);
            }}
          >
            View More
          </Button>
        </div>
      </TextWrapper>
      <ProgressBar progress={props.form.progress} />
    </Card>
  );
};
export default FormCard;
