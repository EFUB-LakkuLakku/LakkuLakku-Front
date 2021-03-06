import React from "react";
import styled from "styled-components";
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

function LoginPage() {
  return (
    <Wrapper>
      <Gap />
      <Title>LOG IN</Title>
      <Input placeholder="이메일을 입력해 주세요" type="text" width="345rem">
        이메일
      </Input>
      <Input
        placeholder="비밀번호를 입력해 주세요"
        type="password"
        width="345rem"
      >
        비밀번호
      </Input>
      <Gap />
      <YellowButton>로그인</YellowButton>
      <SmallText weight="bold">비밀번호 찾기</SmallText>
      <Gap />
    </Wrapper>
  );
}

export default LoginPage;
