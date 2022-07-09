import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  /* 공통 스타일 */
  align-self: stretch;
  flex-grow: 0;
  border-radius: 6px;
  padding: 13px 200px 13px 20px;
  border: solid 1px #504a40;
  background-color: #fff;

  /* 크기 */
  height: 20px;
  width: 300px;
`;

const Styledlabel = styled.label`
  /* 공통 스타일 */
  margin-bottom: 10px;
  flex-grow: 0;

  /* 크기 */
  height: 22px;

  /* 폰트 */
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.28px;
  text-align: left;
  color: #423d33;
`;

const divStyle = {
  "margin-bottom": "30px",
  "margin-top": "30px",
  display: "flex",
  "flex-direction": "column",
};

function InputField({ children, type, placeholder }) {
  return (
    <div style={divStyle}>
      <Styledlabel>{children}</Styledlabel>
      <StyledInput type={type} placeholder={placeholder} />
    </div>
  );
}

export default InputField;
