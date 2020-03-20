import React from "react";
import { Card, CardH1 } from "../../styling/card";

interface Props {}
const FormCard: React.FC<Props> = props => {
  return (
    <Card backgroundColor="#1E2937">
      <CardH1>Hello</CardH1>
    </Card>
  );
};
export default FormCard;
