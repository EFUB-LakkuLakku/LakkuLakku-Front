import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants/Config";
/*
localStorage.setItem(
  "accesstoken",
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmbG93ZXJzYXlvQGdtYWlsLmNvbSIsInJvbGVzIjoiVVNFUiIsImlhdCI6MTY1OTc4MzY4NCwiZXhwIjoxNjU5NzkwODg0fQ.PxCBLlRHSL2irXE37OenTB8n4-By1oqrzqdqAOnGpSo"
);
*/
const token = localStorage.getItem("accessToken");
//localStorage.setItem("nickname", "flowersayo");
const API = axios.create({
  baseURL: BASE_URL, // 기본 서버 주소 입력
  headers: {
    Authorization: `Bearer ${token}`,
  },
  withCredentials: false, // 이거 반드시 false 로 설정해야 서버에서 wildcard (*) 썼을때 오류 안나도록 할 수 있음
  crossDomain: true,
});

export default API;
