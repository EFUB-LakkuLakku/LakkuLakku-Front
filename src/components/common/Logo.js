import React from "react";
import styled from "styled-components";
import Icon from "../../assets/icon.svg";
import TextLogo from "../../assets/lakkulakku.svg";

const Container = styled.div`
  width: 110px;
  height: 29px;
  display: flex;
  align-items: center;
`;

function Logo() {
  return (
    <Container>
      <img src={Icon} width={"26rem"} height={"26rem"} />
      <img src={TextLogo} width={"73rem"} height={"17rem"} />
    </Container>
  );
}

export default Logo;
