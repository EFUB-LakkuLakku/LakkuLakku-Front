import React from "react";
import styled from "styled-components";

const StyledRectangle = styled.div`
  /* 공통 스타일 */
  margin: 14.1px 100px;
  padding: 100px 200px 100px 200px;
  border-radius: 30px;
  background-color: #fffbf2;

  /* 크기 */
  width: 70%;
  height: 70%;
`;

function BackRectangle({ ...rest }) {
  return <StyledRectangle {...rest}></StyledRectangle>;
}

export default BackRectangle;
