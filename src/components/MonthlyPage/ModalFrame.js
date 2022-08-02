import React from "react";
import styled from "styled-components";
import close from "./Close.png";
import arrow from "./right.png";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 90rem;
  border-radius: 30px;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  width: 1380rem;
  height: 905rem;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Close = styled.img.attrs({
  src: close,
})`
  position: absolute;
  right: 20rem;
  top: 20rem;
  cursor: pointer;
`;

const ArrowCircle = styled.div`
  position: absolute;
  top: 452rem;
  right: 60rem;
  cursor: pointer;
  width: 45rem;
  height: 45rem;
  background-color: var(--main);
  border-radius: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.img.attrs({
  src: arrow,
})``;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalFrame = ({ _handleModal, children, ...rest }) => {
  return (
    <Container>
      <Background onClick={_handleModal} />
      <ModalBlock {...rest}>
        <Close onClick={_handleModal} />
        <ArrowCircle>
          <Arrow />
        </ArrowCircle>
        <Contents>{children}</Contents>
      </ModalBlock>
    </Container>
  );
};

export default ModalFrame;
