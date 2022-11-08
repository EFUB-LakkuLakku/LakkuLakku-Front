import React from "react";
import styled from "styled-components";
import { YellowButton } from "../LoginPage/../SignupPage/index";
import bigLogo from "../../assets/icon.svg";
import textLogo from "./TextLogo.png";
import { useNavigate } from "react-router-dom";
import { css } from "styled-components";
const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${css`
    animation: 0.7s fadein forwards;
  `}
  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const Text = styled.span`
  font-family: "NotoSansKR-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 12rem;
  line-height: 22rem;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
  margin-top: 30rem;
`;

const JoinText = styled.span`
  font-family: "NotoSansKR-Medium";
  font-style: normal;
  font-size: 14rem;
  font-weight: 700;
  line-height: 22rem;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
  margin-left: 10rem;
  cursor: pointer;
`;

const IntroText = styled.div`
  font-family: "NotoSansKR-Light";
  font-style: normal;
  font-size: 18rem;
  font-weight: bold;
  line-height: 27rem;
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;

  color: var(--font);
`;

const Gap = styled.div`
  height: 100rem;
`;

const SmallGap = styled.div`
  height: 35rem;
`;

function LandingPage() {
  const navigate = useNavigate();
  //sessionStorage.clear();
  return (
    <View>
      <img src={bigLogo} />
      <SmallGap />
      <IntroText>
        공유 먼슬리 다이어리 &nbsp;
        <img src={textLogo} />
      </IntroText>
      <IntroText>간단하게 나만의 다이어리를 작성하며</IntroText>
      <IntroText>여러분의 라이프를 꾸며보세요.</IntroText>
      <Gap />
      <YellowButton
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </YellowButton>
      <Text>
        계정이 없으신가요?{" "}
        <JoinText
          onClick={() => {
            navigate("/register");
          }}
        >
          회원가입
        </JoinText>{" "}
      </Text>
    </View>
  );
}

export default LandingPage;
