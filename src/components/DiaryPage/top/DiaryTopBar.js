import React from "react";
import styled from "styled-components";
import Right from "../../../assets/right-arrow.svg";
import Left from "../../../assets/left-arrow.svg";
import Edit from "../../../assets/edit.svg";
import Trash from "../../../assets/trash.svg";
import Close from "../../../assets/close.svg";
import Save from "../../../assets/save.svg";

import { useNavigate, useParams, useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 61rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom: 1px solid var(--border);
  background-color: var(--sub-2);
`;
const ImgBox = styled.img.attrs(({ src, alt, onClick }) => ({
  src: src,
  alt: alt,
  onClick: onClick,
}))`
  width: 24px;
  height: 24px;
  margin: 25rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 30px;
  }
`;

const ImgContainer = styled.div``;

export default function DiaryTopBar({ setIsEditing, isEditing }) {
  const navigate = useNavigate();

  const editDiary = () => {
    alert(" 수정모드진입");
    setIsEditing(true); // 수정모드진입
  };
  const deleteDiary = () => {
    // 1. 다이어리 정말 삭제할건지 묻는 경고 모달창
    // 2. 다이어리 삭제 요청
    // 3. 먼슬리 페이지로 리다이렉트
    alert("정말로 삭제하시겠습니까?");
  };

  const { nickname } = useParams(); // 현재 유저 닉네임 정보
  const { pathname } = useLocation();
  const params = pathname.split("/");
  const date = params[4]; // 다이어리 날짜 정보
  const BASE_URL = "http://localhost:3000/"; //나중에 도메인 생기면 바꾸기

  const closeDiary = () => {
    //사용자가 본래 보고 있던 사람의 먼슬리 페이지로 이동

    const link = "/main/" + nickname;
    window.location.href = link;
    navigate(link);
  };

  const saveDiary = () => {
    //다이어리 저장 요청
    //수정모드 해제
    alert("저장을 완료하였습니다.");
    setIsEditing(false);
  };

  //current : 현재 보고있는 다이어리의 날짜로부터 offset 전후의 날짜를 yyyy-mm-dd 형태로 반환
  const getDay = (current, offset) => {
    const d = new Date(current);
    d.setDate(d.getDate() + offset);
    var path = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    return path;
  };

  //탑바 우측 부분 아이콘
  const right =
    isEditing == false ? (
      <ImgContainer>
        <ImgBox src={Edit} alt="edit" onClick={editDiary} />
        <ImgBox src={Trash} alt="trash" onClick={deleteDiary} />
        <ImgBox src={Close} alt="close" onClick={closeDiary} />
      </ImgContainer>
    ) : (
      <ImgContainer>
        <ImgBox src={Save} alt="save" onClick={saveDiary} />

        <ImgBox src={Close} alt="close" onClick={closeDiary} />
      </ImgContainer>
    );

  return (
    <Container>
      <ImgContainer>
        <ImgBox
          src={Left}
          alt="left"
          onClick={() => {
            const yesterday = getDay(date, -1);
            const link = BASE_URL + "main/" + nickname + "/diary/" + yesterday;
            window.location.href = link;
          }}
        />
        <ImgBox
          src={Right}
          alt="right"
          onClick={() => {
            const tomorrow = getDay(date, 1);
            const link = BASE_URL + "/main/" + nickname + "/diary/" + tomorrow;
            window.location.href = link;
          }}
        />
      </ImgContainer>

      {right}
    </Container>
  );
}
