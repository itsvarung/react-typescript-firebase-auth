import React from "react";
import { Card, CardH1, CardH2 } from "./styles";

interface Props {
  title: String;
  description: String;
}
const FormCard: React.FC<Props> = props => {
  return (
    <Card backgroundColor="#1E2937">
      <CardH1>{props.title}</CardH1>
      <CardH2>{props.description}</CardH2>
    </Card>
  );
};
export default FormCard;
