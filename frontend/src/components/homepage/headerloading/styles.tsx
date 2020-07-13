import styled from "styled-components";
import img from "../../../images/Una-White.svg";

export const H1 = styled.h1`
  font-size: 35px;
  color: #ffffff;
  font-weight: 700;
`;

export const H2 = styled.h2`
  font-size: 20px;
  color: #ffffff;
  font-weight: 400;
`;

export const AccentColorText = styled.span`
  color: #32ddfd;
`;

export const BackgroundCard = styled.div`
  display: flex;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.02), 0 0px 40px rgba(0, 0, 0, 0.08);
  width: 100%;
  height: 650px;
  background: #2d70d8;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: 85% 100%;
  display: inline-grid;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  width: 50%;
  padding: 30px;
  display: inline-grid;
`;
