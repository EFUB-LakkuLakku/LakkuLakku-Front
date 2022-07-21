import React from "react";
import Plus from "../../assets/plus-square.svg";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70rem;
  //position : fixed; -> 배율이 변해도 위치해야할 자리에 있으면서 고정시키는 방법 찾아보기.
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ImgBox = styled.img.attrs(({ src, alt, onClick }) => ({
  src: src,
  alt: alt,
  onClick: onClick,
}))`
  width: 24rem;
  height: 24rem;
  margin-left: 38rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.input.attrs({
  placeholder: "다이어리의 제목을 입력해 주세요",
})`
  width: 650rem;
  height: 40rem;
  border-radius: 5px;
  border-width: 0.5px;
  border-color: var(--b600);
  font-family: "NotoSansKR-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14rem;
  line-height: 22rem;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
  padding: 15rem;
  color: black;

  &::placeholder {
    font-family: "NotoSansKR-Light";
    color: var(--font);
  }
`;

export default function DiaryInfo() {
  return (
    <Container>
      <ImgBox src={Plus} alt="plus" />
      <DateBar />
      <Title />
    </Container>
  );
}

const Text = styled.text`
  font-size: 24rem;
  font-family: "SF Pro";
  font-style: normal;
  font-style: normal;
  font-weight: 700;
  line-height: 29rem;
  /* identical to box height */
  text-align: center;
  letter-spacing: -0.02em;
  margin: 19rem;
`;

function DateBar() {
  const today = new Date();
  const year = today.getFullYear();
  const month =
    today.getMonth() + 1; /*getMonth()는 0~11까지의 값 반환하므로 1더함*/
  const day = today.getDay();

  return (
    <Text>
      {year}년 {month}월 {day}일
    </Text>
  );
}
