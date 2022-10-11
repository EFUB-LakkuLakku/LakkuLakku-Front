import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import API from "../../utils/api";
import AuthService from "../../api/AuthService";
import { useNavigate } from "react-router-dom";
export default function ChangePwdPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  //const [currentPasswordError, setCurrentPasswordError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setPasswordError(false);
    else setPasswordError(true);

    if (!confirmPassword || e.target.value === confirmPassword)
      setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    if (password === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setConfirmPassword(e.target.value);
  };

  const onsubmitPassword = () => {
    console.log(confirmPasswordError);
    if (password == confirmPassword) {
      // 비밀번호가 같다면
      var body = {
        newPwd: password,
        checkNewPwd: confirmPassword,
      };
      AuthService.changePassword(body)
        .then((res) => {
          if (res.status == 200) {
            alert(
              "비밀번호가 변경되었습니다. 새로운 비밀번호로 로그인해주세요"
            );
            navigate("/login");
          } else {
            alert("비밀번호 변경에 실패하였습니다.");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("비밀번호를 다시 확인해주세요");
    }
  };
  return (
    <SettingBox>
      <PwBox>
        <PwHeader>비밀번호 수정</PwHeader>

        <PwSection>
          <Input
            onChange={onChangePassword}
            value={password}
            placeholder="새 비밀번호를 입력해 주세요"
            type="password"
            minLength={8}
            maxLength={16}
            required
          />
          {passwordError && (
            <Error>
              8자 이상, 16자 이내의 영문자 및 숫자와 특수문자(!@#$%^*+=-)로
              입력해주세요.
            </Error>
          )}
        </PwSection>

        <PwHeader>비밀번호 재입력</PwHeader>
        <PwSection>
          <div className="inputandbutton">
            <Input
              onChange={onChangeConfirmPassword}
              value={confirmPassword}
              placeholder="새 비밀번호를 다시 한번 입력해 주세요"
              type="password"
              className="inputandbutton__input"
              minLength={8}
              maxLength={16}
              required
            />
          </div>
          {confirmPasswordError && <Error>비밀번호가 일치하지 않습니다.</Error>}
        </PwSection>

        <SubmitBtnBox>
          <SubmitBtn type="submit" onClick={onsubmitPassword}>
            확인
          </SubmitBtn>
        </SubmitBtnBox>
      </PwBox>
    </SettingBox>
  );
}

const SettingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Header = styled.div`
  font-size: 24rem;
  font-family: "NotoSansKR";
  font-weight: 800;

  margin-bottom: 55rem;
`;

const PwBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 563rem; //*box 크기 고정해주고! 안의 요소들 움직이기

  margin-bottom: 64rem; //보류
`;

const PwHeader = styled.div`
  font-size: 18rem;
  font-family: "NotoSansKR-Bold";
  color: #625d52;

  margin-bottom: 10rem;
`;

const PwSection = styled.div`
  height: 78rem;

  margin-bottom: 19rem;
`;

const Input = styled.input`
  width: 563rem;
  height: 48rem;
  border: 1rem solid #667080;
  border-radius: 6rem;

  margin-bottom: 8rem;
  padding: 0 20rem;

  ::placeholder {
    color: #a39e93;
    font-size: 14rem;
    font-family: "NotoSansKR-Medium";
  } //placeholder 스타일링하기!
`;

const Error = styled.div`
  font-size: 12rem;
  font-family: "NotoSansKR-Regular";
  color: #8b681a;
`;

const SubmitBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubmitBtn = styled.button`
  //확인 버튼 위치 보류
  width: 97rem;
  height: 48rem;
  background-color: #a39e93;
  border-radius: 6rem;
  border: none;

  color: #ffffff;
  font-size: 18rem;
  font-family: "NotoSansKR-Bold";
`;

const UidBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 450rem;
`;

const UidHeader = styled.div`
  font-size: 18rem;
  font-family: "NotoSans-Bold";
  color: #625d52;
`;

const UidText = styled.div`
  font-size: 16rem;
  font-family: "NotoSans-Regular";
`;

const CopyBtn = styled.button`
  width: 58rem;
  height: 26rem;
  border: none;
  border-radius: 17rem;
  background-color: #a39e93;

  font-size: 12px;
  font-family: "NotoSansKR-Bold";
  color: #ffffff;
`;
