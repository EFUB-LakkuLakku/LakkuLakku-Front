import React from "react";
import styled from "styled-components";
import DiaryHeader from "./DiaryHeader";
import DiaryInfo from "./DiaryInfo";
import SampleImg from "../../assets/sample-img.svg";
import DiaryTabbar from "./DiaryTabbar";
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
`;

const ImgBox = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt,
}))`
  width: 100%;
  height: 679rem;
`;

function DiaryPage() {
  return (
    <View>
      <DiaryHeader />
      <Container>
        <DiaryInfo />
        <ImgBox src={SampleImg} alt={"diaryimg"} />
        <ImgBox src={SampleImg} alt={"diaryimg"} />

        <DiaryTabbar />
      </Container>
    </View>
  );
}

export default DiaryPage;
