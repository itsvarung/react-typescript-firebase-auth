import styled, { CSSObject } from "styled-components";

interface CardProps {
  backgroundColor: any;
}

export const Card = styled.span<CardProps>`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  margin: 48px auto 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  width: 400px;
  height: 150px;
  background: ${props => props.backgroundColor};
`;

export const CardH1 = styled.text`
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
`;

export const CardH2 = styled.text`
  font-size: 10px;
  color: #1e2937;
  font-weight: 300;
`;
