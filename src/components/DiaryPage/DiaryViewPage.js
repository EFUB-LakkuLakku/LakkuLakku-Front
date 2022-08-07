import React, { useState, useEffect } from "react";

import styled from "styled-components";
import DiaryTopBar from "./top/DiaryTopBar";
import DiaryHeader from "./top/DiaryHeader";
import SampleImg from "../../assets/sample-img.svg";
import DiaryTabbar from "./DiaryTabbar";
import Comments from "./comment/Comments";
import Like from "./Like";
import Chat from "./Chat";

import DiaryService from "../../api/DiaryService";
import { useParams, useLocation } from "react-router-dom";

import API from "../../utils/api";

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

function DiaryViewPage({ setIsEditing, diaryInfo }) {
  const [like, setLike] = useState(false); // 유저가 좋아요 눌렀는지 여부
  const [chatCnt, setChatCnt] = useState(diaryInfo?.diary.cntComment); // 댓글 카운트

  useEffect(() => {
    checkLike(); // 좋아요 구하기
  }, []);

  // 현재 사용자(nickname)가 다이어리 주인(owner)의 다이어리에 좋아요를 눌렀는지 여부
  const checkLike = (nickname, owner) => {
    const { likeList } = diaryInfo;

    var check = false;
    for (var i = 0; i < likeList.length; i++) {
      if (likeList[i].isLike) {
        setLike(true);
        return;
      }
    }
  };
  return (
    <View>
      <DiaryTopBar setIsEditing={setIsEditing} isEditing={false} />
      <DiaryHeader
        setIsEditing={setIsEditing}
        titleEmoji={diaryInfo?.diary.titleEmoji}
        title={diaryInfo?.diary.title}
        onlyView={true}
      />
      <Container>
        <ImgBox
          src={SampleImg}
          alt={"diaryimg"}
          width={"100%"}
          height={"679rem"}
        />
        <InfoBox>
          <Like
            like={like}
            setLike={setLike}
            like_cnt={diaryInfo?.diary.cntLike}
            diary={diaryInfo?.diary}
          />

          <Chat chat_cnt={chatCnt} />
        </InfoBox>
        <Comments />
      </Container>
      <DiaryBottomBar />
    </View>
  );
}

export default DiaryViewPage;
