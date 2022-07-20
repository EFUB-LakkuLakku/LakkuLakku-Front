import React, { useState } from "react";
import theme from "../../styles/theme";
import styled from "styled-components";
import Bell from "../../assets/bell.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 0.365;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--main);
  border-bottom-left-radius: 30px;
  position: relative;
`;

const Title = styled.text`
  font-weight: 600;
  font-size: 18rem;
  font-family: "NotoSansKR-Bold";
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 2;
  margin-left: 13rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 4;
`;
const SmallText = styled.text`
  font-size: 14rem;
  font-family: "NotoSansKR-Regular";
  margin-bottom: 10rem;
  margin-left: 57rem;
`;

const ImgBox = styled.img.attrs({
  src: Bell,
})`
  width: 16rem;
  height: 16rem;
  margin: 12rem;
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
  font-family: "NotoSansKR-Regular";
  font-weight: 600;
  font-size: 14rem;
  margin: 3rem;
`;
const LinkWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  align-self: center;
  align-items: center;
`;

function Notice() {
  const [notice, SetNotice] = useState([]);
  return (
    <Container>
      <TitleWrapper>
        <ImgBox />
        <Title> 새로운 알림</Title>
      </TitleWrapper>
      <TextWrapper>
        <SmallText>
          <b>라꾸</b>님이 새 친구가 되었습니다
        </SmallText>
        <SmallText>
          <b>라꾸</b>님이 나의 댓글에 좋아요를 눌렀습니...
        </SmallText>
        <SmallText>
          <b>라꾸</b>님 나의 5월 7일 일기에 댓글을 남겼....
        </SmallText>
        <SmallText>
          <b>냥냥</b>님이 댓글에 이모지를 추가하였습니...
        </SmallText>
        <SmallText>
          <b>왈왈이</b>님이 댓글에 이모지를 추가하였습...
        </SmallText>
      </TextWrapper>
      <LinkWrapper>
        <StyledLink to={"/logout"}>로그아웃 </StyledLink> |
        <StyledLink to={"setting"}>설정</StyledLink>
      </LinkWrapper>
    </Container>
  );
}

export default Notice;
