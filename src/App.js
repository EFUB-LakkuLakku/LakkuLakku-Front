import {
  SideBar,
  LandingPage,
  SignupPage,
  LoginPage,
  MainPage,
  Tabbar,
  DiaryPage,
} from "./components/index";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Background from "./components/common/Background";
import Wrapper from "./components/common/Wrapper";
import Logo from "./components/common/Logo";
import "./App.css";
import styled from "styled-components";

import PrivateRoute from "./utils/privateRoute";
import PublicRoute from "./utils/publicRoute";

const LogoContainer = styled.div`
  width: 1380rem;
  margin-top: 30rem;
`;

function App() {
  return (
    <Background>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <Wrapper>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute restricted={false} component={<LandingPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted={true} component={<LoginPage />} />
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute restricted={true} component={<SignupPage />} />
            }
          />
          <Route
            path="/main/:nickname/*"
            element={<PrivateRoute component={<MainPage />} />}
          />
          {/**MainPage는 사이드바 사용하는 페이지 */}
        </Routes>
      </Wrapper>
    </Background>
  );
}

export default App;
