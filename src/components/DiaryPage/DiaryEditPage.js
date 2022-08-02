import React, { useState } from "react";
import styled from "styled-components";
import DiaryTopBar from "./top/DiaryTopBar";
import DiaryHeader from "./top/DiaryHeader";
import DiaryTabbar from "./DiaryTabbar";
import { useParams } from "react-router-dom";
import DiarySideBar from "./sidebar/DiarySideBar";
import Canvas from "./edit/Canvas";

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

const Content = styled.div.attrs(({ id }) => ({
  id: id,
}))`
  width: 100%;
  height: 674rem;
  overflow: auto; // 스크롤 영역 생성을 위함.
  display: flex;
  flex-direction: column;
  align-items: center;
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

  // undefined: 맨 처음 상태, null : 사이드바 닫힌상태, sticker : 스티커용 사이드바 오픈된 상태, paper : 속지용 사이드바 오픈된 상태
  const [sideBarType, setsideBarType] = useState(undefined);

  return (
    <View>
      <DiaryTopBar setIsEditing={setIsEditing} isEditing={isEditing} />

      <Container>
        <DiarySideBar sideBarType={sideBarType} />
        <ContentWrapper>
          <DiaryHeader />
          <Content id={"stage-parent"}>
            <Canvas />
          </Content>
        </ContentWrapper>
      </Container>
      <DiaryTabbar setsideBarType={setsideBarType} />
    </View>
  );
}

export default DiaryEditPage;
