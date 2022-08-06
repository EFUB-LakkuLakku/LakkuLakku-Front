import React, { useState } from "react";
import styled, { css } from "styled-components";
import ModalFrame from "./ModalFrame";
import info_1 from "./info_1.png";
import info_2 from "./info_2.png";
import info_3 from "./info_3.png";
import arrow from "./right.png";

const Container = styled.div``;

const Contents = styled.div`
  position: absolute;
  ${(props) => {
    return css`
      top: ${props.top};
      left: ${props.left};
    `;
  }}
`;

const Info1 = styled.img.attrs({
  src: info_1,
})`
  width: 330rem;
  height: 905rem;
`;

const Info2 = styled.img.attrs({
  src: info_2,
})`
  width: 1100rem;
  height: 900rem;
`;

const Info3 = styled.img.attrs({
  src: info_3,
})`
  width: 153rem;
  height: 37rem;
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

const Text = styled.div`
  position: absolute;
  color: var(--white);
  font-size: 40rem;
  ${(props) => {
    return css`
      top: ${props.top};
      left: ${props.left};
    `;
  }}
`;

const LittleText = styled.div`
  position: absolute;
  color: var(--white);
  font-size: 18rem;
  ${(props) => {
    return css`
      top: ${props.top};
      left: ${props.left};
    `;
  }}
`;

const TutorialModal = ({ handleModal }) => {
  const [currentModal, setCurrentModal] = useState(0);

  return (
    <ModalFrame _handleModal={handleModal}>
      {currentModal == 0 && (
        <Container>
          <Contents top="90rem" left="450rem">
            <Info1 />
          </Contents>
          <Text top="90rem" left="820rem">
            1. 프로필 창
          </Text>
          <LittleText top="160rem" left="820rem">
            나만의 프로필 창입니다. <br /> 기본 정보와 새로운 알림이 나타나요!
            <br /> 나의 다이어리를 공유하고 싶은 사람은 UID를 복사하고
            공유하세요
          </LittleText>
          <ArrowCircle onClick={() => setCurrentModal(1)}>
            <Arrow />
          </ArrowCircle>
        </Container>
      )}
      {currentModal == 1 && (
        <Container>
          <Contents top="90rem" left="760rem">
            <Info2 />
          </Contents>
          <Text top="90rem" left="460rem">
            2. 먼슬리 달력
          </Text>
          <LittleText top="160rem" left="460rem">
            라꾸라꾸의 기본 화면입니다! <br />
            날짜를 클릭하고, 하루의 일정이나 <br />
            일기 등 자유롭게 꾸며보세요. <br />
            작성된 다이어리는 쉽고 간단하게 <br />
            열람할 수 있습니다.
          </LittleText>
          <ArrowCircle onClick={() => setCurrentModal(2)}>
            <Arrow />
          </ArrowCircle>
        </Container>
      )}
      {currentModal == 2 && (
        <Container>
          <Contents top="55rem" left="1650rem">
            <Info3 />
          </Contents>
          <Text top="90rem" left="1300rem">
            3. 친구 탭
          </Text>
          <LittleText top="160rem" left="1300rem">
            오른쪽 상단에는 ‘친구' 탭이 존재합니다. <br />
            친구랑 다이어리를 공유하고 싶을 때, <br />
            친구의 다이어리가 궁금할 때 눌러보세요! <br />
          </LittleText>
        </Container>
      )}
    </ModalFrame>
  );
};

export default TutorialModal;
