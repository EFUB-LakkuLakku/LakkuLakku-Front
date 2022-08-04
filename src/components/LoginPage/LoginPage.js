import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {
  Title,
  Input,
  YellowButton,
  SmallText,
} from "../LoginPage/../SignupPage/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Gap = styled.div`
  height: 80rem;
`;

const WarningTag = styled.p`
  font-family: "NotoSansKR-Light";
  color: var(--nickname);
`;

const initialState = {
  emailAlert: { msg: " ", status: " " },
  passwordAlert: { msg: " ", status: " " },
};

const actions = {
  EmailCheck: "EmailCheck",
  PasswordCheck: "PasswordCheck",
};

const reducer = (warningAlert, action) => {
  const { EmailCheck, PasswordCheck } = actions;
  switch (action.type) {
    case EmailCheck:
      return {
        ...warningAlert,
        emailAlert: action.emailAlert,
      };
    case PasswordCheck:
      return {
        ...warningAlert,
        passwordAlert: action.passwordAlert,
      };
    default:
      return {
        ...warningAlert,
      };
  }
};

function LoginPage() {
  const [warningAlert, dispatch] = useReducer(reducer, initialState);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const {
        config,
        response: { status },
      } = error;
      if (status === 401) {
        if (error.response.data.code === "TOKEN_VALIDATE_FAILURE") {
          const originalRequest = config;
          const refreshToken = localStorage.getItem("refreshToken");
          const email = localStorage.getItem("email");

          const res = await axios.get("/api/v1/users/re-issue", {
            params: {
              email: email,
              refreshToken: refreshToken,
            },
          });

          const newAccessToken = res.data.accessToken;
          const newRefreshtoekn = res.data.refreshToken;

          localStorage.setItem("accessToken", newAccessToken);
          localStorage.setItem("refreshToken", newRefreshtoekn);

          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        } else if (error.response.data.code === "REFRESHTOKEN_EXPIRED") {
          navigate("/login");
        }
      }
      return Promise.reject(error);
    }
  );

  async function getLoginUser() {
    try {
      const response = await axios.post("/api/v1/users/login", {
        email: email,
        password: password,
      });
      console.log(response.data);

      const { accessToken } = response.data.accessToken;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("email", email);
      localStorage.setItem("nickname", response.data.nickname);

      const nickname = localStorage.getItem("nickname");
      await navigate(`/main/${nickname}`);
    } catch (err) {
      console.error(err.response);
      if (err.response.status === 400) {
        dispatch({
          type: "PasswordCheck",
          passwordAlert: {
            msg: "비밀번호를 잘못 입력했습니다.",
            status: "warning",
          },
        });
        dispatch({
          type: "EmailCheck",
          emailAlert: {
            msg: " ",
            status: "success",
          },
        });
      } else if (err.response.status === 404) {
        dispatch({
          type: "EmailCheck",
          emailAlert: {
            msg: "이메일을 잘못 입력했습니다.",
            status: "warning",
          },
        });
      }
    }
  }

  const CheckId = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    getLoginUser();
  };
  const onEmailHandler = (e) => {
    SetEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    SetPassword(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <Gap />
      <Title>LOG IN</Title>
      <Input
        placeholder="이메일을 입력해 주세요"
        type="text"
        value={email}
        onChange={onEmailHandler}
        width="345rem"
      >
        이메일
      </Input>
      <WarningTag>{warningAlert.emailAlert.msg}</WarningTag>
      <Input
        placeholder="비밀번호를 입력해 주세요"
        type="password"
        value={password}
        onChange={onPasswordHandler}
        width="345rem"
      >
        비밀번호
      </Input>
      <WarningTag>{warningAlert.passwordAlert.msg}</WarningTag>
      <Gap />
      <YellowButton onClick={CheckId}>로그인</YellowButton>
      <SmallText weight="bold">비밀번호 찾기</SmallText>
      <Gap />
    </Wrapper>
  );
}

export default LoginPage;
