import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #ffe898;
  border: 0;
  margin-top: 50px;

  /* 크기 */
  width: 213px;
  height: 49px;

  /* 폰트 */
  flex-grow: 0;
  font-family: AppleSDGothicNeo;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: center;
  color: #212529;

  /* 기타 */
  &:hover {
    background-color: #8b681a;
    color: white;
  }

  &:active {
    background-color: #8b681a;
  }
`;

function YellowButton({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default YellowButton;
