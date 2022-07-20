import {
  SideBar,
  LandingPage,
  LoginPage,
  MainPage,
  Tabbar,
} from "./components/index";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Background from "./components/common/Background";
import Wrapper from "./components/common/Wrapper";
import Logo from "./components/common/Logo";
import "./App.css";
import styled from "styled-components";

const LogoContainer = styled.div`
  width: 1380rem;
  margin-top: 30rem;
`;

function App() {
  // 0번 : 다이어리 탭, 1번: 친구탭

  return (
    <Background>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <Wrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/** <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="/main/*" element={<MainPage />} />
          {/**MainPage는 사이드바 사용하는 페이지 */}
        </Routes>
      </Wrapper>
    </Background>
  );
}

export default App;
