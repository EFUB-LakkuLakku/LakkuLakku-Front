import React, { useState } from "react";
import Plus from "../../../assets/plus-square.svg";
import styled from "styled-components";
import { EmojiPicker } from "./EmojiPicker";
import { useLocation } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 70rem;
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

export default function DiaryHeader() {
  const [chosenEmoji, setChosenEmoji] = useState();
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const { pathname } = useLocation();
  const params = pathname.split("/");
  const dates = params[4]; // 다이어리 날짜 정보
  const ymd = dates.split("-");
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    emojiPickerVisible(false);
  };
  const emojiContainer = styled.button.attrs(({ onClick }) => ({
    onClick: onClick,
  }))`
    width: 24rem;
    height: 24rem;
    margin-left: 38rem;
    background-color: yellow;
  `;

  const emojiPickerContainer = styled.div`
    background-color: red;
    width: 24rem;
    height: 24rem;
    margin-left: 38rem;
  `;

  const date = {
    year: ymd[0],
    month: ymd[1],
    day: ymd[2],
  };

  return (
    <Container>
      <EmojiPicker disabled={false} />
      <DateBar date={date} />
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
  margin-left: 15rem;
`;

function DateBar({ date }) {
  const year = date.year;
  const month = date.month;
  const day = date.day;

  return (
    <Text>
      {year}년 {month}월 {day}일
    </Text>
  );
}
