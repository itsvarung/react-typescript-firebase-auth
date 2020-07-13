import styled from "styled-components";
import img from "../../images/Una-WhiteHalf.svg";

export const MainWrapper = styled.div`
  min-width: 1200px;
`;

export const LeftPageWrapper = styled.div`
  margin: auto;
  width: 40%;
  height: 100vh;
  background: #2d70d8;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center bottom;
  display: inline-grid;
  align-items: center;
`;

export const RightPageWrapper = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  margin: auto;
  width: 60%;
  display: inline-grid;
  align-items: center;
`;

export const H1Left = styled.h1`
  font-size: 35px;
  color: #ffffff;
  font-weight: 700;
`;

export const H2Left = styled.h2`
  font-size: 20px;
  color: #ffffff;
  font-weight: 400;
`;

export const H1Right = styled.h1`
  font-size: 35px;
  font-weight: 700;
  color: #2d70d8;
`;

export const H2Right = styled.h2`
  font-size: 20px;
  font-weight: 400;
`;

export const LeftPageHeadingWrapper = styled.div`
  padding-left: 50px;
`;

export const RightPageHeadingWrapper = styled.div`
  padding-bottom: 30px;
`;

export const ButtonsWrapper = styled.div`
  width: 50%;
  padding: 30px;
  display: inline-grid;
`;
