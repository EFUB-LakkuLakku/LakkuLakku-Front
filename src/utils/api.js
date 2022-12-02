import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants/Config";
import getToken from "./getToken";
import { refresh, refreshErrorHandle } from "./refresh";

/*
//로컬 테스트용
sessionStorage.setItem(
  "accessToken",
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5ajEwMDNAZ21haWwuY29tIiwicm9sZXMiOiJVU0VSIiwiaWF0IjoxNjY5OTkxMTMzLCJleHAiOjE2Njk5OTgzMzN9.CcjRGA2naoTRMk-jTvstYxClcBaK221yiKqzpcxxrxQ"
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
