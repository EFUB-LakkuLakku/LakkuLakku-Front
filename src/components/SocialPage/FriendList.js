import React, { useState } from "react";
import styled from "styled-components";
import userImage from "./UserImage.png";
import userImage2 from "./UserImage2.png";
import userImage3 from "./UserImage3.png";
import userImage4 from "./UserImage4.png";
import userImage5 from "./UserImage5.png";
import homeImage from "./home.png";
import unfollow from "./unfollow.png";
import axios from "axios";
import API from "../../utils/api";

const View = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.635;
`;
const Container = styled.div`
  width: 1050rem;
  height: 65rem;
  display: flex;
  background-color: var(--main);
  border-top-right-radius: 30px;
`;

const MenuText = styled.span`
  font-family: "NotoSansKR-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 20rem;
  line-height: 163.02%;

  display: flex;
  margin-left: 20rem;
  align-items: center;
  letter-spacing: -0.05em;

  color: #27241d;
`;

const UserBox = styled.div`
  margin-top: 22rem;
  margin-left: 110rem;
`;

const UserImage = styled.span`
  width: 63rem;
  height: 63rem;
  border-radius: 50%;
  vertical-align: middle;
`;

const UserName = styled.span`
  font-family: "NotoSansKR-Light";
  font-style: normal;
  font-weight: 700;
  font-size: 18rem;
  display: inline-block;
  width: 160rem;

  margin-left: 40rem;
`;

const HomeImage = styled.span`
  vertical-align: middle;
  padding-left: 350rem;
  padding-top: 1rem;
`;

const Unfollow = styled.button`
  vertical-align: middle;
  padding-left: 40rem;
  border: 0;
  outline: 0;
  background-color: transparent;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);

  z-index: 100; //수정
`;

const UnfollowBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  width: 400rem;
  height: 292rem;
  border-radius: 20rem;
`;
const ModalBtn = styled.button`
  font-family: "NotoSansKR-Light";
  font-style: normal;
  font-weight: 700;
  font-size: 16rem;
  margin-left: 60rem;
  text-align: center;

  margin-top: 10rem;
  margin-bottom: 10rem;
  margin-left: 160rem;
  border: none;
  background-color: white;
  cursor: pointer;
  color: #ff0000;
`;

const CancelBtn = styled.button`
  font-family: "NotoSansKR-Light";
  font-style: normal;
  font-weight: 700;
  font-size: 16rem;
  text-align: center;

  margin-top: 10rem;
  margin-bottom: 10rem;
  margin-left: 175rem;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const ModalLine = styled.div`

height: 50rem;
margin-top: 30rem;
border-top: 1px solid #E8E6E1;
border-bottom: 1px solid #E8E6E1;

}
`;

const ModalText = styled.div`
  font-family: "NotoSansKR-Light";
  font-style: normal;
  font-weight: 700;
  font-size: 16rem;
  margin-left: 60rem;

}
`;

const ModalUserImage = styled.div`
  margin-left: 160rem;
  margin-top: 30rem;
  margin-bottom: 10rem;
  width: 90rem;
  height: 90rem;
  border-radius: 50%;
  vertical-align: middle;
`;

function FriendList() {
  const [isModal, setIsModal] = useState(false);
  const ModalHandler = () => {
    setIsModal((prev) => !prev);
  };

  API.get(`/api/v1/friends`).then((res) => {
    console.log(res.data);
  });

  return (
    <View>
      <Container>
        <MenuText>친구 목록</MenuText>
      </Container>
      <UserBox>
        <UserImage>
          <img src={userImage} />
        </UserImage>
        <UserName>왈왈이왈왈이왈왈</UserName>
        <HomeImage>
          <img src={homeImage} />
        </HomeImage>
        {isModal ? (
          <>
            <Unfollow>
              <img src={unfollow} />
            </Unfollow>
            <ModalBackground>
              <UnfollowBox>
                <ModalUserImage>
                  <img src={userImage} />
                </ModalUserImage>
                <ModalText>왈왈이왈왈이왈왈님과 연결을 끊겠습니까?</ModalText>
                <ModalLine>
                  <ModalBtn onClick={ModalHandler}>친구 끊기</ModalBtn>
                </ModalLine>

                <CancelBtn onClick={ModalHandler}>취소</CancelBtn>
              </UnfollowBox>
            </ModalBackground>
          </>
        ) : (
          <Unfollow onClick={ModalHandler}>
            <img src={unfollow} />
          </Unfollow>
        )}
      </UserBox>
      <UserBox>
        <UserImage>
          <img src={userImage2} />
        </UserImage>
        <UserName>킁킁이 </UserName>
        <HomeImage>
          <img src={homeImage} />
        </HomeImage>
        <Unfollow>
          <img src={unfollow} />
        </Unfollow>
      </UserBox>
      <UserBox>
        <UserImage>
          <img src={userImage3} />
        </UserImage>
        <UserName>냥냥이</UserName>
        <HomeImage>
          <img src={homeImage} />
        </HomeImage>
        <Unfollow>
          <img src={unfollow} />
        </Unfollow>
      </UserBox>
      <UserBox>
        <UserImage>
          <img src={userImage4} />
        </UserImage>
        <UserName>라꾸라꾸</UserName>
        <HomeImage>
          <img src={homeImage} />
        </HomeImage>
        <Unfollow>
          <img src={unfollow} />
        </Unfollow>
      </UserBox>
      <UserBox>
        <UserImage>
          <img src={userImage5} />
        </UserImage>
        <UserName>어쩔티비티비</UserName>
        <HomeImage>
          <img src={homeImage} />
        </HomeImage>
        <Unfollow>
          <img src={unfollow} />
        </Unfollow>
      </UserBox>
    </View>
  );
}
export default FriendList;
