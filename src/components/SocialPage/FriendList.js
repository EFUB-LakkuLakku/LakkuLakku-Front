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

const ShadowBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%
  background-color: var(--black);
  opacity: 0.7;
`;

const UnfollowBox = styled.div`
  position: center;
  background-color: var(--white);
  width: 400rem;
  height: 292rem;
  border-radius: 50rem;
`;

function FriendList() {

  let [modal, setModal] = useState(false);

  API
    .get(`/api/v1/friends`)
    .then((res) => {
      console.log(res.data)
    });

  return (
    <View>
      <ShadowBox>
        <unfollowBox></unfollowBox>
      </ShadowBox>
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
        <Unfollow onClick={()=>{setModal(true)}}>
          {
            modal === true
            ? <unfollowBox/>
            :null
          }
          <img src={unfollow}  />
        </Unfollow>
      </UserBox>
      <UserBox>
        <UserImage>
          <img src={userImage2} />
        </UserImage>
        <UserName>킁킁이      </UserName>
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
