import React from "react";
import styled from "styled-components";

const StyledTittleText = styled.div`
  /* 크기 */
  width: 244rem;
  height: 54rem;

  /* 폰트 */
  font-family: "NotoSansKR-Bold";
  font-size: 40rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.8rem;
  text-align: center;
  color: var(--font);
`;

function TittleText({ children, ...rest }) {
  return <StyledTittleText {...rest}>{children}</StyledTittleText>;
}

export default TittleText;
