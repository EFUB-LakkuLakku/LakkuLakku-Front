import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants/Config";

localStorage.setItem(
  "accesstoken",
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmbG93ZXJzYXlvQGdtYWlsLmNvbSIsInJvbGVzIjoiVVNFUiIsImlhdCI6MTY1OTY2NTM5OCwiZXhwIjoxNjU5NjcyNTk4fQ.9UyFdHmcSuY7m12qnT-aZQyyFy_xDbnlg7YDFqWMQkU"
);
const token = localStorage.getItem("accesstoken");
localStorage.setItem("nickname", "flowersayo");
const API = axios.create({
  baseURL: BASE_URL, // 기본 서버 주소 입력
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5ajEyMzRAZ21haWwuY29tIiwicm9sZXMiOiJVU0VSIiwiaWF0IjoxNjU5NjQ4MzY5LCJleHAiOjE2NTk2NTU1Njl9.eBrJxb6KDoQQOlq1LnnhWyeyrcnmhQK5EK7zDj1xtZU`,
  },
  withCredentials: false, // 이거 반드시 false 로 설정해야 서버에서 wildcard (*) 썼을때 오류 안나도록 할 수 있음
  crossDomain: true,
});

export default API;
