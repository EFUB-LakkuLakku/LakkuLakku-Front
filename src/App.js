import {
  SideBar,
  MonthlyPage,
  LandingPage,
  DiaryPage,
  SettingPage,
  SigninPage,
  LoginPage,
} from "./components/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<MonthlyPage />} />
      </Routes>
    </div>
  );
}

export default App;
