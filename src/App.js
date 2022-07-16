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
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/main" element={<MonthlyPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
