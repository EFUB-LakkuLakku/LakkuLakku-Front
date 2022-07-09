import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 32px;
  border-radius: 6px;
  background-color: #a39e93;
  border: 0;
  margin-top: 30px;
  margin-left: 30px;

  /* 크기 */
  width: 95px;
  height: 48px;

  /* 폰트 */
  flex-grow: 0;
  font-family: AppleSDGothicNeo;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.67;
  letter-spacing: -0.36px;
  text-align: center;
  color: white;

  /* 기타 */
  &:hover {
    background-color: white;
    color: #a39e93;
  }

  &:active {
    background-color: white;
    color: #a39e93;
  }
`;

function GrayButton({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default GrayButton;
