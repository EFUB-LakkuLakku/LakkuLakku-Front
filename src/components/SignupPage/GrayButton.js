import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  padding: 0 25rem;
  border-radius: 6px;
  background-color: var(--w400);
  border: 0;
  margin-top: 30rem;
  margin-left: 30rem;

  /* 크기 */
  width: 95rem;
  height: 48rem;

  /* 폰트 */
  flex-grow: 0;
  font-family: "NotoSansKR-Light";
  font-size: 18rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.67;
  letter-spacing: -0.36rem;
  text-align: center;
  color: white;

  /* 기타 */
  &:hover {
    background-color: white;
    color: var(--400);
  }

  &:active {
    background-color: white;
    color: var(--400);
  }
`;

function GrayButton({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default GrayButton;
