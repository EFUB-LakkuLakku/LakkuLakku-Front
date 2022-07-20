import React from "react";
import { SideBar } from "../index";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import { MonthlyPage, SettingPage } from "../index";

// flex 레이아웃 설정용 전체 View
const View = styled.div`
  display: flex;
  flex-direction: row; // 사이드바와 메인 박스를 가로 정렬
  width: 100%;
  height: 100%;
`;

//사이드바 포함된 페이지
export default function MainPage() {
  return (
    <View>
      {/**사이드바는 고정, 우측 박스 부분만 갈아끼우기 */}
      <SideBar />
      <Routes>
        <Route path="/" element={<MonthlyPage />} />
        {/*<Route path="/social" element={<SocialPage/>}/>*/}
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </View>
  );
}
