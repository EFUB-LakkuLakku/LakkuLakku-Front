import React, { useState, useEffect, useReducer, useRef } from "react";
import styled from "styled-components";
import { YellowButton, Title, Input, GrayButton } from "./index";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Gap = styled.div`
  height: 50rem;
`;

const GrayButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 120rem;
`;

const WarningTag = styled.p`
  font-family: "NotoSansKR-Light";
  color: var(--nickname);
`;

const initialState = {
  emailAlert: { msg: " ", status: " " },
  passwordAlert: { msg: " ", status: " " },
  confirmPasswordAlert: { msg: " ", status: " " },
  nicknameAlert: { msg: " ", status: " " },
};

const actions = {
  EmailCheck: "EmailCheck",
  PasswordCheck: "PasswordCheck",
  confirmPasswordCheck: "confirmPasswordCheck",
  nicknameCheck: "nicknameCheck",
};

const reducer = (warningAlert, action) => {
  const { EmailCheck, PasswordCheck, confirmPasswordCheck, nicknameCheck } =
    actions;
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
    case confirmPasswordCheck:
      return {
        ...warningAlert,
        confirmPasswordAlert: action.confirmPasswordAlert,
      };
    case nicknameCheck:
      return {
        ...warningAlert,
        nicknameAlert: action.nicknameAlert,
      };
    default:
      return {
        ...warningAlert,
      };
  }
};

const regEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const regPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

function SignupPage() {
  const [warningAlert, dispatch] = useReducer(reducer, initialState);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, SetNickname] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    regEmail.test(email)
      ? dispatch({
          type: "EmailCheck",
          emailAlert: { msg: "유효한 이메일입니다.", status: "success" },
        })
      : dispatch({
          type: "EmailCheck",
          emailAlert: {
            msg: "유효한 이메일을 입력해주세요.",
            status: "success",
          },
        });
    regPw.test(password) && password.length >= 8 && password.length <= 16
      ? dispatch({
          type: "PasswordCheck",
          passwordAlert: { msg: "유효한 비밀번호입니다.", status: "success" },
        })
      : dispatch({
          type: "PasswordCheck",
          passwordAlert: {
            msg: "8자 이상, 16자 이내의 영문자 및 숫자와 특수문자(!@#$%^*+=-)로 입력해주세요.",
            status: "warning",
          },
        });
  }, [email, password, confirmPassword]);

  async function getPostUser() {
    try {
      const response = await axios.post(
        "https://lakku-lakku.com/api/v1/users/signup",
        {
          email: email,
          password: password,
          nickname: nickname,
        }
      );
      await navigate("/login");
    } catch (err) {
      console.error(err);
    }
  }

  const onClick = (e) => {
    e.preventDefault();
    if (!email || !nickname || !password || !confirmPassword) return;
    if (password !== confirmPassword) {
      dispatch({
        type: "confirmPasswordCheck",
        confirmPasswordAlert: {
          msg: "비밀번호가 일치하지 않습니다.",
          status: "warning",
        },
      });
      return;
    }
    getPostUser();
  };

  async function getDuplicateEmail() {
    try {
      const response = await axios.get(
        `https://lakku-lakku.com/api/v1/users/signup/email?email=${email}`
      );
      console.log(response);
      alert("사용 가능한 이메일입니다.");
    } catch (err) {
      console.error(err);
      alert("이미 사용중인 이메일입니다.");
    }
  }

  const CheckEmail = (e) => {
    e.preventDefault();
    if (!email) return;
    getDuplicateEmail();
  };

  async function getDuplicateNickname() {
    try {
      const response = await axios.get(
        `https://lakku-lakku.com/api/v1/users/signup/nickname?nickname=${nickname}`
      );
      console.log(response);
      alert("사용 가능한 닉네임입니다.");
    } catch (err) {
      console.error(err);
      alert("이미 사용중인 닉네임입니다.");
    }
  }

  const CheckNickname = (e) => {
    e.preventDefault();
    if (!nickname) return;
    if (nickname.length < 2 || nickname.length > 10) {
      dispatch({
        type: "nicknameCheck",
        nicknameAlert: {
          msg: "잘못된 형식의 닉네임입니다. 2자 이상 10자 이내로 작성해주세요.",
          status: "warning",
        },
      });
      return;
    } else {
      dispatch({
        type: "nicknameCheck",
        nicknameAlert: {
          msg: " ",
          status: "success",
        },
      });
    }
    getDuplicateNickname();
  };

  const onEmailHandler = (e) => {
    SetEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    SetPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onNicknameHandler = (e) => {
    SetNickname(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <Title>SIGN UP</Title>
      <GrayButtonWrapper>
        <Input
          placeholder="이메일을 입력해 주세요"
          type="text"
          value={email}
          onChange={onEmailHandler}
          width="563rem"
        >
          이메일
        </Input>
        <GrayButton onClick={CheckEmail}>확인</GrayButton>
      </GrayButtonWrapper>
      <WarningTag>{warningAlert.emailAlert.msg}</WarningTag>
      <Input
        placeholder="비밀번호를 입력해 주세요"
        type="password"
        value={password}
        onChange={onPasswordHandler}
        width="563rem"
      >
        비밀번호
      </Input>
      <WarningTag>{warningAlert.passwordAlert.msg}</WarningTag>
      <Input
        placeholder="비밀번호를 입력해 주세요"
        type="password"
        value={confirmPassword}
        onChange={onConfirmPasswordHandler}
        width="563rem"
      >
        비밀번호 확인
      </Input>
      <WarningTag>{warningAlert.confirmPasswordAlert.msg}</WarningTag>
      <GrayButtonWrapper>
        <Input
          placeholder="2자 이상 6자 이내 닉네임을 입력해주세요"
          type="text"
          value={nickname}
          onChange={onNicknameHandler}
          width="563rem"
        >
          닉네임
        </Input>
        <GrayButton onClick={CheckNickname}>확인</GrayButton>
      </GrayButtonWrapper>
      <WarningTag>{warningAlert.nicknameAlert.msg}</WarningTag>
      <Gap />
      <YellowButton type="submit" onClick={onClick}>
        회원 가입
      </YellowButton>
    </Wrapper>
  );
}

export default SignupPage;
