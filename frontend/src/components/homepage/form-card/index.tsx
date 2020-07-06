import React from "react";
import { Card, CardH1, CardH2, TextWrapper, ViewMoreLink } from "./styles";
import { ProgressBar } from "./progress-bar";

interface Props {
  title: String;
  description: String;
  cardColor: String;
  progress: number;
  url: string;
}

const FormCard: React.FC<Props> = (props) => {
  return (
    <Card>
      <TextWrapper>
        <div>
          <CardH1>{props.title}</CardH1>
          <CardH2>{props.description}</CardH2>
          <ViewMoreLink href={props.url} target="_blank">
            View More
          </ViewMoreLink>
        </div>
      </TextWrapper>
      <ProgressBar progress={props.progress} />
    </Card>
  );
};
export default FormCard;
