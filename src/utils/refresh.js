import axios, { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";
import AuthService from "../api/AuthService";
import { BASE_URL } from "../constants/Config";
import moment from "moment";

const refresh = async (config) => {
  //const refreshToken = Cookie.get("refreshToken");
  const expireAt = sessionStorage.getItem("expiresAt");
  let token = sessionStorage.getItem("accessToken");
  console.log("만료확인");

  // 토큰이 만료되었다면
  if (moment(expireAt).diff(moment()) < 0) {
    var body = {
      email: sessionStorage.getItem("email"),
    };

    console.log("토큰을 재발급합니다!");

    //재발급 요청
    const res = await axios.post(`${BASE_URL}/api/v1/users/re-issue`, body);
    console.log("재발급 성공", res.data.accessToken);
    sessionStorage.setItem("accessToken", res.data.accessToken);

    sessionStorage.setItem(
      "expiresAt",
      moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss") //유효기간 : 1시간
    );

    config.headers["Authorization"] = `Bearer ${token}`; // 토큰 교체
  }

  return config;
};

const refreshErrorHandle = () => {
  //Cookie.remove("refreshToken");
};

export { refresh, refreshErrorHandle };
