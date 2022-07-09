import React from "react";
import styled from "styled-components";

const StyledTittleText = styled.div`
  /* 크기 */
  width: 244px;
  height: 54px;

  /* 폰트 */
  font-family: SFPro;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.8px;
  text-align: center;
  color: #423d33;
`;

function TittleText({ children, ...rest }) {
  return <StyledTittleText {...rest}>{children}</StyledTittleText>;
}

export default TittleText;
