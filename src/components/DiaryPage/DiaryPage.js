import React, { useState } from "react";
import styled from "styled-components";
import DiaryEditPage from "./DiaryEditPage";
import DiaryViewPage from "./DiaryViewPage";
import { useParams } from "react-router-dom";

//flex 설정 덮어씌우기 -> 더 좋은 방법이 있다면 추후에 수정하기
const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 30px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto; // 스크롤 영역 생성을 위함.
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgBox = styled.img.attrs(({ src, alt, width, height }) => ({
  src: src,
  alt: alt,
}))`
  width: width;
  height: height;
`;

const InfoBox = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: space-around;
  width: 175px;
  margin-left: 15%;
  margin-top: 15%;
`;

const DiaryBottomBar = styled.div`
  width: 100%;
  height: 85rem;
  border-top: 1px solid var(--border);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom: 1px solid var(--border);
  background-color: var(--sub-2);
`;

function DiaryPage() {
  const { nickname } = useParams(); // 현재 유저 닉네임 정보

  const [isEditing, setIsEditing] = useState(false); //수정모드인지 아닌지

  return isEditing ? (
    <DiaryEditPage isEditing={isEditing} setIsEditing={setIsEditing} />
  ) : (
    <DiaryViewPage setIsEditing={setIsEditing} />
  );
}

export default DiaryPage;
