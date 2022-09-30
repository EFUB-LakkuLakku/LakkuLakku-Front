import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import AuthService from "../../api/AuthService";
import { Title, Input, YellowButton, SmallText } from "../SignupPage/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Gap = styled.div`
  height: ${({ height }) => height}rem;
`;

const Caption = styled.p`
  font-family: "NotoSansKR-Light";
  color: var(--nickname);
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  /* or 157% */
  white-space: pre-wrap;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
`;

const Row = styled.div`
  flex-direction: row;
  width: 628rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default function FindPwdPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  var check = false; // 인증번호 통과 여부

  const _handleSendEmail = () => {
    // 이메일 유효성 처리

    if (!email.includes("@")) {
      return;
    }

    if (email == "") {
      return;
    }
    AuthService.findPassword(email)
      .then((res) => {
        if (res.status == 200) {
          alert("비밀번호 전송이 완료되었습니다.");
        } else {
          alert("비밀번호 전송에 실패했습니다.");
        }
      })
      .catch((err) => console.log(err));
  };

  const _checkVerificationCode = () => {
    var body = {
      certiCode: code,
      email: email,
    };

    AuthService.checkVerificationCode(body)
      .then((res) => {
        if (res.status == 200) {
          alert("코드 인증이 완료되었습니다.");
          check = true;
        } else {
          alert("코드 인증에 실패하였습니다. 다시 시도해주세요.");
        }
      })
      .catch((err) => console.log(err));
  };

  const _handleNext = () => {
    if (check) {
      navigate("/changePassword");
    } else {
      alert("인증번호 인증을 완료해주세요.");
    }
  };

  return (
    <Wrapper>
      <Gap height={80} />
      <Title>비밀번호 찾기 </Title>
      <Caption>
        가입한 이메일 주소를 입력해주세요. <br />
        임시 비밀번호를 이메일로 보내드리겠습니다.
      </Caption>

      <Row>
        <Input
          placeholder="이메일을 입력해 주세요"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          width="345rem"
        >
          이메일
        </Input>
        <div>
          <Gap height={30} />
          <YellowButton onClick={_handleSendEmail}>
            임시 비밀번호 받기
          </YellowButton>
        </div>
      </Row>
      <Row>
        <Input
          placeholder="인증번호를 입력해주세요"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          width="345rem"
        >
          인증번호
        </Input>
        <div>
          <Gap height={30} />
          <YellowButton onClick={() => _checkVerificationCode()}>
            확인
          </YellowButton>
        </div>
      </Row>
      <Gap height={120} />
      <YellowButton onClick={_handleNext}>다음</YellowButton>
    </Wrapper>
  );
}
