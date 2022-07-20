import { SideBar, LandingPage, LoginPage, MainPage } from "./components/index";
import { Route, Routes } from "react-router-dom";
import Background from "./components/common/Background";
import Wrapper from "./components/common/Wrapper";
import "./App.css";

function App() {
  return (
    <Background>
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
