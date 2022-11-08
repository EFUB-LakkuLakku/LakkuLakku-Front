import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants/Config";
import getToken from "./getToken";
import { refresh, refreshErrorHandle } from "./refresh";

/*
로컬 테스트용
localStorage.setItem(
  "accessToken",
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5ajEwMDNAZ21haWwuY29tIiwicm9sZXMiOiJVU0VSIiwiaWF0IjoxNjY3ODk0NjA1LCJleHAiOjE2Njc5MDE4MDV9.c-R_-EhZst9VmnTcRFB1U0S7svSyOMLTWO_mAwbNRBQ"
);

sessionStorage.setItem("nickname", "유잔");*/

const token = getToken();
console.log("현재토큰값", token);
const nickname = sessionStorage.getItem("nickname");

//token이 없을때에는 일반 axios 요청
const API = token
  ? axios.create({
      baseURL: BASE_URL, // 기본 서버 주소 입력
      headers: {
        Authorization: `Bearer ${token}`,
      },

      withCredentials: true, // 이거 반드시 false 로 설정해야 서버에서 wildcard (*) 썼을때 오류 안나도록 할 수 있음
      crossDomain: true,
    })
  : axios.create({
      baseURL: BASE_URL, // 기본 서버 주소 입력
      withCredentials: true, // 이거 반드시 false 로 설정해야 서버에서 wildcard (*) 썼을때 오류 안나도록 할 수 있음
      crossDomain: true,
    });

// 리프레시 토큰 갱신

API.interceptors.request.use(refresh, refreshErrorHandle);
export default API;
