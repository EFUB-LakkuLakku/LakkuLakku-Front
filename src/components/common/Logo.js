import React from "react";
import styled from "styled-components";
import Icon from "../../assets/icon.svg";
import TextLogo from "../../assets/lakkulakku.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 110rem;
  height: 29rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function Logo() {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(`/main/${localStorage.getItem("nickname")}`);
      }}
    >
      <img src={Icon} width={"26rem"} height={"26rem"} />
      <img src={TextLogo} width={"73rem"} height={"17rem"} />
    </Container>
  );
}

export default Logo;
