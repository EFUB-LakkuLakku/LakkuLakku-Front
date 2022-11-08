import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DiaryEditPage from "./DiaryEditPage";
import DiaryViewPage from "./DiaryViewPage";
import { useParams } from "react-router-dom";
import DiaryService from "../../api/DiaryService";

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
  const { nickname, date } = useParams(); // 현재 보고있는 다이어리 주인 닉네임 정보

  const [isEditing, setIsEditing] = useState(false); //수정모드인지 아닌지
  const [diaryInfo, setDiaryInfo] = useState({
    diary: {
      id: "~",
      userId: "~",
      title: "",
      titleEmoji: null,
      templateId: "~",
      cntComment: 0,
      cntLike: 0,
    },
    template: {
      id: "~",
      category: "basic",
      url: "https://s3.ap-northeast-2.amazonaws.com/{서버주소}/template/basic/1.jpg",
    },
    textList: [
      {
        id: "~",
        style: "특히영속성전",
        weight: 13,
        size: 20,
        width: 136,
        height: 47,
        align: "left",
        color: "#000000",
        content: "텍스트02",
        x: 4323,
        y: 1234,
        rotation: 38,
      },
      {
        id: "~",
        style: "jpa진짜쉬름",
        weight: 13,
        size: 20,
        width: 136,
        height: 47,
        align: "left",
        color: "#000000",
        content: "텍스트01",
        x: 4323,
        y: 1234,
        rotation: 38,
      },
    ],
    imageList: [
      {
        id: "~",
        width: 771,
        height: 480,
        x: 132,
        y: 3928,
        rotation: 38,
        url: "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/sticker/basic/sticker_01.png",
      },
      {
        id: "~",
        width: 730,
        height: 487,
        x: 132,
        y: 3928,
        rotation: 38,
        url: "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/sticker/basic/sticker_01.png",
      },
    ],
    stickerList: [
      {
        id: "~",
        width: 100,
        height: 100,
        x: 200,
        y: 350,
        rotation: 38,
        category: "basic",
        url: "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/sticker/basic/sticker_01.png",
      },
      {
        id: "~",
        width: 100,
        height: 100,
        x: 200,
        y: 350,
        rotation: 38,
        category: "cute",
        url: "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/sticker/basic/sticker_01.png",
      },
    ],
    commentList: [
      {
        id: "~",
        userId: "~", // 댓글 작성한 유저 id
        profileImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/sticker/basic/sticker_01.png", // 댓글 작성한 유저 프로필 사진
        nickname: "이퍼비",
        parentId: null,
        content: "날씨 좋다 나도 가고싶어!.",
        isSecret: false,
        createdOn: "2022-07-07T13:51:30.684329Z",
      },
      {
        id: "~",
        userId: "~", // 댓글 작성한 유저 id
        profileImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/sticker/basic/sticker_01.png", // 댓글 작성한 유저 프로필 사진
        nickname: "어쩔티비티비",
        parentId: "~",
        content: " 우와 여기는 어디야 대박이다~~~~!",
        isSecret: false,
        createdOn: "2022-07-07T13:51:30.684329Z",
      },
      {
        id: "~",
        userId: "~", // 댓글 작성한 유저 id
        profileImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/sticker/basic/sticker_01.png", // 댓글 작성한 유저 프로필 사진
        nickname: "앵고",
        parentId: null,
        content: "이게 도대체 뭔 소리냐",
        isSecret: false,
        createdOn: "2022-07-07T13:51:30.684329Z",
      },
    ],
    likeList: [
      {
        id: "~",
        userId: "~",
        profileImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/sticker/basic/sticker_01.png", // 댓글 작성한 유저 프로필 사진
        nickname: "앵고",
        createdOn: "2022-07-05T18:01:27.043739",
      },
      {
        id: "~",
        userId: "~",
        createdOn: "2022-07-05T18:01:27.043739",
      },
    ],
  });

  /*
  // 다이어리 정보 조회
  React.useEffect(() => {
    DiaryService.getDiary(date, nickname)
      .then((res) => {
        if (res.status == 200) {
          setDiaryInfo(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err, "다이어리 조회에 실패하였습니다");
      });
  }, []);
*/

  const fetchDiary = () => {
    DiaryService.getDiary(date, nickname)
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          setDiaryInfo(res.data);
          console.log(diaryInfo.diary.id);
        } else {
          console.log("실패");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDiary();
    //checkLike(); // 좋아요 구하기
  }, []);
  return isEditing ? (
    <DiaryEditPage
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      diaryInfo={diaryInfo}
    />
  ) : (
    <DiaryViewPage setIsEditing={setIsEditing} diaryInfo={diaryInfo} />
  );
}

export default DiaryPage;
