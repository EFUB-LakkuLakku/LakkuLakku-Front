import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: var(--main);
  border: 0;
  margin-top: 0rem;

  /* 크기 */
  width: 213rem;
  height: 49rem;

  /* 폰트 */
  flex-grow: 0;
  font-family: "NotoSansKR-Bold";
  font-size: 18rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: center;
  color: var(-900);

  /* 기타 */
  &:hover {
    background-color: white;
    color: var(--main);
  }

  &:active {
    background-color: var(--main);
  }
`;

function YellowButton({ children, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default YellowButton;
