import React from "react";
import styled from "styled-components";

const StyledBg = styled.div`
  /* 공통 스타일 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17.2px 30px 59px;
  background-color: #f8f9fa;

  /* 크기 */
  width: 100%;
  height: 100%;
`;

function BackGround({ ...rest }) {
  return <StyledBg {...rest}></StyledBg>;
}

export default BackGround;
