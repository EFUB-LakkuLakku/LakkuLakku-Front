import React, { useState } from "react";
import styled from "styled-components";
import DiaryTopBar from "./top/DiaryTopBar";
import DiaryHeader from "./top/DiaryHeader";
import SampleImg from "../../assets/sample-img.svg";
import DiaryTabbar from "./DiaryTabbar";

import { useParams } from "react-router-dom";
import DiarySideBar from "./sidebar/DiarySideBar";

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

const Content = styled.div`
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

const ContentWrapper = styled.div`
  display: flex;
  flex: 1; // 사이드바 제외한 나머지 영역 꽉채우기
  height: 100%;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 759rem;
`;

function DiaryEditPage({ setIsEditing, isEditing }) {
  const { nickname } = useParams(); // 현재 유저 닉네임 정보

  // null : 사이드바 닫힌상태, sticker : 스티커용 사이드바 오픈된 상태, paper : 속지용 사이드바 오픈된 상태
  const [sideBarType, setsideBarType] = useState(undefined);
  return (
    <View>
      <DiaryTopBar setIsEditing={setIsEditing} isEditing={isEditing} />

      <Container>
        <DiarySideBar sideBarType={sideBarType} />
        <ContentWrapper>
          <DiaryHeader />
          <Content>
            <ImgBox
              src={SampleImg}
              alt={"diaryimg"}
              width={"100%"}
              height={"679rem"}
            />
          </Content>
        </ContentWrapper>
      </Container>
      <DiaryTabbar setsideBarType={setsideBarType} />
    </View>
  );
}

export default DiaryEditPage;
