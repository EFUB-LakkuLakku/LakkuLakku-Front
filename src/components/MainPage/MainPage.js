import React from "react";
import { SideBar } from "../index";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";

import {
  MonthlyPage,
  SettingPage,
  SocialPage,
  Tabbar,
  DiaryPage,
} from "../index";

// flex 레이아웃 설정용 전체 View
const View = styled.div`
  display: flex;
  flex-direction: row; // 사이드바와 메인 박스를 가로 정렬
  width: 100%;
  height: 100%;
`;

//사이드바 포함된 페이지
export default function MainPage() {
  const { pathname } = useLocation();
  const params = pathname.split("/");
  //console.log(params);
  const isDiaryPage = params[2] === "diary" ? true : false;

  // 0번 : 다이어리 탭, 1번: 친구탭
  const [currentTab, setCurrentTab] = React.useState(0); // 다이어리탭을 기본으로
  return (
    <View>
      {/** 다이어리 페이지가 아닐 경우에만 탭바 보이기 */}
      {!isDiaryPage && (
        <Tabbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      )}

      {/**사이드바는 고정, 우측 박스 부분만 갈아끼우기 */}
      {!isDiaryPage && <SideBar />}
      <Routes>
        <Route path="/:nickname" element={<MonthlyPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/diary/:date" element={<DiaryPage />} />
      </Routes>
    </View>
  );
}
