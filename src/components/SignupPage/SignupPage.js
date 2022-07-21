import React, { useState, useEffect, useReducer, useRef } from "react";
import styled from "styled-components";
import { YellowButton, Title, Input, GrayButton } from "./index";

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
};

const actions = {
  EmailCheck: "EmailCheck",
  PasswordCheck: "PasswordCheck",
  confirmPasswordCheck: "confirmPasswordCheck",
};

const reducer = (alert, action) => {
  const { EmailCheck, PasswordCheck, confirmPasswordCheck } = actions;
  switch (action.type) {
    case EmailCheck:
      return {
        ...alert,
        emailAlert: action.emailAlert,
      };
    case PasswordCheck:
      return {
        ...alert,
        passwordAlert: action.passwordAlert,
      };
    case confirmPasswordCheck:
      return {
        ...alert,
        confirmPasswordAlert: action.confirmPasswordAlert,
      };
    default:
      return {
        ...alert,
      };
  }
};

const regEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const regPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

function SignupPage() {
  const [alert, dispatch] = useReducer(reducer, initialState);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, SetNickname] = useState("");

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

  const onClick = (e) => {
    e.preventDefault();
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
        <GrayButton>확인</GrayButton>
      </GrayButtonWrapper>
      <WarningTag>{alert.emailAlert.msg}</WarningTag>
      <Input
        placeholder="비밀번호를 입력해 주세요"
        type="password"
        value={password}
        onChange={onPasswordHandler}
        width="563rem"
      >
        비밀번호
      </Input>
      <WarningTag>{alert.passwordAlert.msg}</WarningTag>
      <Input
        placeholder="비밀번호를 입력해 주세요"
        type="password"
        value={confirmPassword}
        onChange={onConfirmPasswordHandler}
        width="563rem"
      >
        비밀번호 확인
      </Input>
      <WarningTag>{alert.confirmPasswordAlert.msg}</WarningTag>
      <GrayButtonWrapper>
        <Input
          placeholder="6자 이내 닉네임을 입력해주세요"
          type="text"
          value={nickname}
          onChange={onNicknameHandler}
          width="563rem"
        >
          닉네임
        </Input>
        <GrayButton>확인</GrayButton>
      </GrayButtonWrapper>
      <Gap />
      <YellowButton type="submit" onClick={onClick}>
        회원 가입
      </YellowButton>
    </Wrapper>
  );
}

export default SignupPage;
