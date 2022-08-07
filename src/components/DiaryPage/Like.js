import styled from "styled-components";
import Heart from "../../assets/heart.svg";
import HeartFill from "../../assets/heart-fill.svg";
import DiaryService from "../../api/DiaryService";
import { useState } from "react";
import { useParams } from "react-router-dom";
// 좋아요, 채팅 수 감싸는 컨테이너
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.img.attrs(({ src, alt, width, height, onClick }) => ({
  src: src,
  alt: alt,
  onClick: onClick,
}))`
  width: width;
  height: height;
  margin-right: 6px;
  cursor: pointer;
`;

// like : 해당 사용자가 좋아요 눌렀는지 아닌지
// like_cnt : 좋아요 횟수
export default function Like({ like, like_cnt, diary }) {
  const [likeInfo, setLikeInfo] = useState({ like: like, like_cnt: like_cnt });

  const { date, nickname } = useParams();
  console.log(diary);
  const Text = styled.text`
    font-family: "NotoSansKR-Regular";
    font-style: normal;
    font-weight: 700;
    font-size: 14rem;
    line-height: 22rem;
    /* identical to box height, or 157% */

    letter-spacing: -0.02em;
    font-feature-settings: "calt" off;

    /* 800 */

    color: var(--b800);
  `;

  console.log(diary.id);
  const onClickHandler = () => {
    /*
    DiaryService.likeToggleDiary(date, diary.id)
      .then((res) => {
        if (res.status == 200) {
          console.log("좋아요토글 성공", res.data);
          const tmp = { ...likeInfo };
          tmp.like = !tmp.likeInfo;
          if (tmp.like) tmp.like_cnt += 1;
          else tmp.like_cnt -= 1;
          setLikeInfo(tmp);
        }
      })
      .catch((err) => console.log("좋아요실패", err));
      */
    const tmp = { ...likeInfo };
    tmp.like = !tmp.like;
    if (tmp.like) tmp.like_cnt += 1;
    else tmp.like_cnt -= 1;
    setLikeInfo(tmp);
  };

  return (
    <Wrapper>
      {likeInfo.like === true ? (
        <ImgBox
          src={HeartFill}
          width={"24rem"}
          height={"24rem"}
          onClick={onClickHandler}
        />
      ) : (
        <ImgBox
          src={Heart}
          width={"24rem"}
          height={"24rem"}
          onClick={onClickHandler}
        />
      )}

      <Text>{likeInfo.like_cnt}개</Text>
    </Wrapper>
  );
}
