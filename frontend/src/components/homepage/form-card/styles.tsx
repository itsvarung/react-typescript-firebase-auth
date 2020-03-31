import styled from "styled-components";

interface CardProps {
  backgroundColor: any;
}
export const Card = styled.span<CardProps>`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  min-width: 200px;
  height: 120px;
  background: ${props => props.backgroundColor};
`;

export const CardH1 = styled.h1`
  font-size: 20px;
  color: #ffffff;
  font-weight: 550;
  padding-right: 100px;
`;

export const CardH2 = styled.h2`
  font-size: 13px;
  color: #ffffff;
  font-weight: 300;
  padding-right: 50px;
`;
