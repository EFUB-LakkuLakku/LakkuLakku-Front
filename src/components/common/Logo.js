import React from "react";
import styled from "styled-components";
import Icon from "../../assets/icon.svg";

const Container = styled.div`
  width: 110px;
  height: 29px;
`;

const Text = styled.text``;
function Logo() {
  return (
    <Container>
      <img src={Icon} width={111 * 0.7} height={29 * 0.7} />
      라꾸라꾸
    </Container>
  );
}

export default Logo;
