import React from "react";
import styled from "styled-components";
import {
  Bg,
  BgRect,
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
`;

const Gap = styled.div`
  height: 100px;
`;

function LoginPage() {
  return (
    <div>
      <Bg>
        <BgRect>
          <Gap />
          <Wrapper>
            <Title>LOGIN</Title>
            <Input placeholder="이메일을 입력해 주세요" type="text">
              이메일
            </Input>
            <Input placeholder="비밀번호를 입력해 주세요" type="password">
              비밀번호
            </Input>
            <YellowButton>로그인</YellowButton>
            <SmallText weight="bold">비밀번호 찾기</SmallText>
          </Wrapper>
          <Gap />
        </BgRect>
      </Bg>
    </div>
  );
}

export default LoginPage;
