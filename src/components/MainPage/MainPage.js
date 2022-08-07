import React, { useEffect, useState } from "react";
import { SideBar } from "../index";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useLocation, useParams } from "react-router";
import HomeService from "../../api/HomeService";
import axios from "axios";

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
  const isDiaryPage = params[3] === "diary" ? true : false;
  const { nickname } = useParams(); //다이어리 오너

  // 0번 : 다이어리 탭, 1번: 친구탭
  const [currentTab, setCurrentTab] = React.useState(0); // 다이어리탭을 기본으로
  const [mainInfo, setMainInfo] = useState();
  const loginUser = localStorage.getItem("nickname");
  useEffect(() => {
    /*
    const token = localStorage.getItem("accessToken");

    //token = JSON.stringify(token);

    axios.get("url", {
      params: {
        id: 123
      }
    })
    .then(function (response) {
         // response  
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
    
    const token = localStorage.getItem("accessToken");
    axios({
      url: "https://lakku-lakku.com/api/v1/home", // 통신할 웹문서
      method: "get", // 통신할 방식
      data: {
        // 인자로 보낼 데이터
        nickname: nickname,
      },

      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log("다이어리조회 성공", res);
      })
      .catch((err) => {
        console.log("실패", err);
      });
*/
    /*
    HomeService.getHomeMain(loginUser)
      .then((res) => {
        if (res.status === 200) {
          setMainInfo(mainInfo);
        }
      })
      .catch((err) => console.log(err, "메인정보 받아오기 실패"));
      */
  }, []);
  return (
    <View>
      {/** 다이어리 페이지가 아닐 경우에만 탭바 보이기 */}
      {!isDiaryPage && (
        <Tabbar
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          userNickName={nickname}
        />
      )}

      {/**사이드바는 고정, 우측 박스 부분만 갈아끼우기 */}
      {!isDiaryPage && <SideBar />}
      <Routes>
        <Route path="/" element={<MonthlyPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/diary/:date" element={<DiaryPage />} />
      </Routes>
    </View>
  );
}
