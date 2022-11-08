import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants/Config";
import getToken from "./getToken";
import { refresh, refreshErrorHandle } from "./refresh";

/*
로컬 테스트용
localStorage.setItem(
  "accessToken",
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmbG93ZXJzYXlvQGdtYWlsLmNvbSIsInJvbGVzIjoiVVNFUiIsImlhdCI6MTY1OTgwNTQ2OSwiZXhwIjoxNjU5ODEyNjY5fQ.g5B2oEj_dOvECKOV0D3QyMM2cxoCu7KE7BhaAyFOjU0"
);

localStorage.setItem("nickname", "flowersayo");
*/
const token = getToken();
console.log("현재토큰값", token);
const nickname = sessionStorage.getItem("nickname");

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  crossDomain: true,
});

// 리프레시 토큰 갱신
API.interceptors.request.use(refresh, refreshErrorHandle);

export default API;
