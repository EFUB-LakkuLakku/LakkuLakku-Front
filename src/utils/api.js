import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants/Config";


//로컬 테스트용
sessionStorage.setItem(
  "accessToken",
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5ajEwMDNAZ21haWwuY29tIiwicm9sZXMiOiJVU0VSIiwiaWF0IjoxNjY4MDA5NTA2LCJleHAiOjE2NjgwMTY3MDZ9.tNS660Mi8lx_755HHC0EciMcl3kqfR-Eg_WsJC9O67g"
);

sessionStorage.setItem("nickname", "유잔");



const token = sessionStorage.getItem("accessToken");

console.log("현재토큰값", token);

const nickname = sessionStorage.getItem("nickname");

//token이 없을때에는 일반 axios 요청
const API = token
  ? axios.create({
      baseURL: BASE_URL, // 기본 서버 주소 입력
      headers: {
        Authorization: `Bearer ${token}`,
      },

      withCredentials: false, // 이거 반드시 false 로 설정해야 서버에서 wildcard (*) 썼을때 오류 안나도록 할 수 있음
      crossDomain: true,
    })
  : axios.create({
      baseURL: BASE_URL, // 기본 서버 주소 입력
      withCredentials: false, // 이거 반드시 false 로 설정해야 서버에서 wildcard (*) 썼을때 오류 안나도록 할 수 있음
      crossDomain: true,
    });

export default API;
