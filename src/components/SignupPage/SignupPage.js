import React from "react";
import styled from "styled-components";
import { YellowButton, BgRect, Bg, Title, Input, GrayButton } from "./index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GrayButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 120px;
  margin-bottom: 50px;
`;

function SignupPage() {
  return (
    <div>
      <Bg>
        <BgRect>
          <Wrapper>
            <Title>SIGN UP</Title>
            <Input placeholder="이메일을 입력해 주세요" type="text">
              이메일
            </Input>
            <Input placeholder="비밀번호를 입력해 주세요" type="password">
              비밀번호
            </Input>
            <Input placeholder="비밀번호를 입력해 주세요" type="password">
              비밀번호 확인
            </Input>
            <GrayButtonWrapper>
              <Input placeholder="6자 이내 닉네임을 입력해주세요" type="text">
                닉네임
              </Input>
              <GrayButton>확인</GrayButton>
            </GrayButtonWrapper>
            <YellowButton>회원 가입</YellowButton>
          </Wrapper>
        </BgRect>
      </Bg>
    </div>
  );
}

export default SignupPage;
