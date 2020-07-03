import styled from "styled-components";

export const Card = styled.span`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  padding: 30px;
  display: inline-grid;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  min-width: 200px;
  height: 400px;
  background: #f5f5f7;
`;

export const TextWrapper = styled.div`
  display: inline-grid;
  align-items: center;
  text-align: center;
  height: 320px;
`;
export const CardH1 = styled.h1`
  font-size: 20px;
  color: #1e2937;
  font-weight: 550;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;

export const CardH2 = styled.h2`
  font-size: 13px;
  color: #1e2937;
  font-weight: 300;
  padding-left: 50px;
  padding-right: 50px;
  text-align: center;
`;

export const ViewMoreLink = styled.a`
  text-decoration: none;
  color: #2b66c4;
`;
