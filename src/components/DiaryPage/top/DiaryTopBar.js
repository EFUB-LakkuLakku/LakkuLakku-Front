import React, {useState} from "react";
import styled from "styled-components";
import Right from "../../../assets/right-arrow.svg";
import Left from "../../../assets/left-arrow.svg";
import Edit from "../../../assets/edit.svg";
import Trash from "../../../assets/trash.svg";
import Close from "../../../assets/close.svg";
import Save from "../../../assets/save.svg";
import AlignCenter from "../../../assets/align-center.svg";
import AlignLeft from "../../../assets/align-left.svg";
import AlignRight from "../../../assets/align-right.svg";
import AlignJustify from "../../../assets/align-justify.svg";
import ColorIcon from "../../../assets/coloricon.svg";

import FontStyle from "./FontStyle";
import FontSize from "./FontSize";
import FontWeight from "./FontWeight";
import ColorWheel from "./ColorWheel";


import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

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


const TextMenuContainer = styled.div`
  width: 920rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextMenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const MenuName = styled.div`
  margin-right: 19rem;

  font-size: 16rem;
  font-family: "NotoSansKR-Bold";
  color: #8B681A;
`;

const AlignIcon = styled.img.attrs(({ src, alt, onClick }) => ({
  src: src,
  alt: alt,
  onClick: onClick,
}))`
  width: 24rem;
  height: 26rem;
  cursor: pointer;
  margin-right: 20rem;
  padding: 4rem;
  border-radius: 5rem;
  font-size: 24rem;

  &:hover {
    background-color: #D3CEC4;
  }
`;

const ColorBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;

const ColorWheelBox = styled.div`
  background-color: #D3CEC4;
  padding: 30rem;
  padding-left: 15rem;
  border-radius: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  position:fixed;
  top:150rem;

`;




export default function DiaryTopBar({ setIsEditing, isEditing, showTextMenu }) {

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

    const [showColorWheel,setShowColorWheel] = useState(false);

  const TextMenu = (
    <TextMenuContainer>
      <TextMenuBox>
        <MenuName>서체</MenuName>
        <FontStyle />
      </TextMenuBox>

      <TextMenuBox>
        <MenuName>굵기</MenuName>
        <FontWeight />
      </TextMenuBox>

      <TextMenuBox>
        <MenuName>크기</MenuName>
        <FontSize />
      </TextMenuBox>


      <TextMenuBox>
        <MenuName>정렬</MenuName>
        <AlignIcon src={AlignRight} alt="align-right" ></AlignIcon> {/* onClick={} */}
        <AlignIcon src={AlignCenter} alt="align-center" ></AlignIcon>
        <AlignIcon src={AlignLeft} alt="align-left" ></AlignIcon>
        <AlignIcon src={AlignJustify} alt="align-justify"></AlignIcon>
      </TextMenuBox>

      <TextMenuBox>
        <MenuName>색상</MenuName>
        <ColorBtn onClick={()=>setShowColorWheel((prev) => !prev)}><img src={ColorIcon} alt="coloricon" /></ColorBtn>
        {showColorWheel && <ColorWheelBox><ColorWheel /></ColorWheelBox>}
      </TextMenuBox>
    </TextMenuContainer>
  ) 
  
  

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
            const link = BASE_URL + "main/" + nickname + "/diary/" + tomorrow;
            window.location.href = link;
          }}
        />
      </ImgContainer>

      { (showTextMenu === true) && TextMenu }

      {right}
    </Container>
  );
}
