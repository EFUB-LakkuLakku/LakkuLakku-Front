import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../../assets/icon.svg";
import TextLogo from "../../assets/lakkulakku.svg";
import info from "../MonthlyPage/info.png";
import Modal from "../MonthlyPage/TutorialModal";

const Wrapper = styled.div`
  width: 140rem;
  height: 29rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 110rem;
  height: 29rem;
  display: flex;
  align-items: center;
`;

const Info = styled.img.attrs({
  src: info,
})`
  width: 29rem;
  height: 29rem;
  cursor: pointer;
`;

function Logo() {
  const [modal, setModal] = useState(false);

  return (
    <Wrapper>
      <Container>
        <img src={Icon} width={"26rem"} height={"26rem"} />
        <img src={TextLogo} width={"73rem"} height={"17rem"} />
      </Container>
      <Info
        onClick={() => {
          setModal(!modal);
        }}
      />
      {modal && (
        <Modal
          handleModal={() => {
            setModal(!modal);
          }}
        />
      )}
    </Wrapper>
  );
}

export default Logo;
