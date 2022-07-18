import {
  SideBar,
  MonthlyPage,
  LandingPage,
  DiaryPage,
  SettingPage,
  SignupPage,
  LoginPage,
} from "./components/index";
import { Route, Routes } from "react-router-dom";
import Background from "./components/common/Background";
import Wrapper from "./components/common/Wrapper";
import BackRectangle from "./components/common/BackRectangle";
import Logo from "./components/common/Logo";
import "./App.css";
import styled from "styled-components";

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
      <BackRectangle>
        <Routes>
          <Route path="/register" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/diary" element={<DiaryPage />} />
        </Routes>
      </BackRectangle>
    </Background>
  );
}

export default App;
