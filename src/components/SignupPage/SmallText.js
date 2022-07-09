import React from "react";
import styled, { css } from "styled-components";

const StyledSmallText = styled.div`
  /* 공통 스타일 */
  flex-grow: 0;
  margin-top: 30px;

  /* 크기 */
  width: 76px;
  height: 27px;

  /* 폰트 */
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.28px;
  text-align: left;
  color: black;
  ${(props) => {
    return css`
      font-weight: ${props.weight};
    `;
  }}
`;

function SmallText({ children, ...rest }) {
  return <StyledSmallText {...rest}>{children}</StyledSmallText>;
}

export default SmallText;
