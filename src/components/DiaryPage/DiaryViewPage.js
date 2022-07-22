import React from "react";
import styled from "styled-components";
import DiaryTopBar from "./DiaryTopBar";
import DiaryHeader from "./DiaryHeader";
import SampleImg from "../../assets/sample-img.svg";
import DiaryTabbar from "./DiaryTabbar";
import Comments from "./comment/Comments";
import Like from "./Like";
import Chat from "./Chat";

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

function DiaryViewPage({ setIsEditing }) {
  const { nickname } = useParams(); // 현재 유저 닉네임 정보

  return (
    <View>
      <DiaryTopBar setIsEditing={setIsEditing} isEditing={false} />
      <DiaryHeader setIsEditing={setIsEditing} />
      <Container>
        <ImgBox
          src={SampleImg}
          alt={"diaryimg"}
          width={"100%"}
          height={"679rem"}
        />
        <InfoBox>
          <Like like={false} like_cnt={100} />
          <Chat chat_cnt={10} />
        </InfoBox>
        <Comments currentUserId={2} />
      </Container>
      <DiaryBottomBar />
    </View>
  );
}

export default DiaryViewPage;
