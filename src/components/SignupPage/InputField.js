import React from "react";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  /* 공통 스타일 */
  align-self: stretch;
  flex-grow: 0;
  border-radius: 6px;
  padding: 13rem 200rem 13rem 20rem;
  border: solid 1px var(--700);
  background-color: #fff;

  /* 크기 */
  height: 35rem;
  ${(props) => {
    return css`
      width: ${props.width};
    `;
  }}
`;

const Styledlabel = styled.label`
  /* 공통 스타일 */
  margin-bottom: 10rem;
  flex-grow: 0;

  /* 크기 */
  height: 22rem;

  /* 폰트 */
  font-family: "NotoSansKR-Medium";
  font-size: 14rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.28rem;
  text-align: left;
  color: var(--font);
`;

const divStyle = {
  "margin-bottom": "30rem",
  "margin-top": "30rem",
  display: "flex",
  "flex-direction": "column",
};

function InputField({ children, type, placeholder, value, onChange, width }) {
  return (
    <div style={divStyle}>
      <Styledlabel>{children}</Styledlabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        width={width}
      />
    </div>
  );
}

export default InputField;
