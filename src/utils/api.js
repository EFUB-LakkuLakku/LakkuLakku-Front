import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants/Config";

localStorage.setItem(
  "accesstoken",
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmbG93ZXJzYXlvQGdtYWlsLmNvbSIsInJvbGVzIjoiVVNFUiIsImlhdCI6MTY1OTc0NTUxNiwiZXhwIjoxNjU5NzUyNzE2fQ.a4PN8KLAR-lM2rVca-CC7bG48WRxr6Ml7bfbtWEKB3g"
);
const token = localStorage.getItem("accesstoken");
localStorage.setItem("nickname", "flowersayo");
const API = axios.create({
  baseURL: BASE_URL, // 기본 서버 주소 입력
  headers: {
    Authorization: `Bearer ${token}`,
  },
  withCredentials: false, // 이거 반드시 false 로 설정해야 서버에서 wildcard (*) 썼을때 오류 안나도록 할 수 있음
  crossDomain: true,
});

export default API;
