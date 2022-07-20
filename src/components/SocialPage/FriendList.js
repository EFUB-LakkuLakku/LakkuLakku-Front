import React, { useState } from 'react';
import styled from "styled-components";
import userImage from "./UserImage.png";
import homeImage from "./home.png";
import unfollow from "./unfollow.png";

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
  font-size: 20px;
  line-height: 163.02%;
 
  display: flex;
  margin-left: 20rem;
  align-items: center;
  letter-spacing: -0.05em;

  color: #27241D;
`;

const UserBox = styled.div`
   text-align: center;
   margin-top: 20rem;
`;

const UserImage = styled.span`
  width: 66rem;
  height: 66rem;
  border-radius: 50%;
  vertical-align: middle;
`;

const UserName = styled.span`
  font-family: "NotoSansKR-Medium";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  vertical-align: middle;  
  margin-left: 40rem;

`;

const HomeImage = styled.span`
  vertical-align: middle;
  padding-left: 350rem;
  padding-top: 1rem;

`;

const Unfollow = styled.span`
  vertical-align: middle;
  padding-left: 40rem;
  
`;


function FriendList() {
    
    return (
        <div>
            <Container>
                <MenuText>친구 목록</MenuText>
            </Container>
            <UserBox>
                <UserImage><img src={userImage}/></UserImage>
                <UserName>왈왈이왈왈이왈왈</UserName>
                <HomeImage><img src={homeImage}/></HomeImage>
                <Unfollow><img src={unfollow}/></Unfollow>
            </UserBox>
            <UserBox>
                <UserImage><img src={userImage}/></UserImage>
                <UserName>왈왈이왈왈이왈왈</UserName>
                <HomeImage><img src={homeImage}/></HomeImage>
                <Unfollow><img src={unfollow}/></Unfollow>
            </UserBox>
            <UserBox>
                <UserImage><img src={userImage}/></UserImage>
                <UserName>왈왈이왈왈이왈왈</UserName>
                <HomeImage><img src={homeImage}/></HomeImage>
                <Unfollow><img src={unfollow}/></Unfollow>
            </UserBox>
            <UserBox>
                <UserImage><img src={userImage}/></UserImage>
                <UserName>왈왈이왈왈이왈왈</UserName>
                <HomeImage><img src={homeImage}/></HomeImage>
                <Unfollow><img src={unfollow}/></Unfollow>
            </UserBox>
            <UserBox>
                <UserImage><img src={userImage}/></UserImage>
                <UserName>왈왈이왈왈이왈왈</UserName>
                <HomeImage><img src={homeImage}/></HomeImage>
                <Unfollow><img src={unfollow}/></Unfollow>
            </UserBox>
        </div>
    );
}
export default FriendList;
