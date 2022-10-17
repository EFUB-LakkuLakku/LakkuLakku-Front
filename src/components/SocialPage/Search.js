import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";
import searchIcon from "./search.png";
import userImage from "./UserImage.png";
import follow from "./follow.png";
import axios from "axios";
import API from "../../utils/api";
import FriendService from "../../api/FriendService";
import { createFilterOptions } from "@mui/material";
const View = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.365;
`;

const Container = styled.div`
  width: 1050rem;
  height: 65rem;
  display: flex;
  background-color: var(--main);
  margin-top: 22rem;
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

const SearchBar = styled.div`
  margin-left: 115rem;
  margin-top: 30rem;
  width: 821.43rem;
  height: 65.01rem;
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
`;

const SearchIcon = styled.button`
  display: inline-block;
  vertical-align: middle;
  margin-top: 19rem;
  margin-left: 40rem;

  border: 0;
  outline: 0;
  background-color: transparent;
`;

const SearchText = styled.input`
  display: inline-block;
  font-family: "NotoSansKR-Light";
  font-style: normal;
  font-weight: 700;
  font-size: 16rem;
  line-height: 163.02%;

  vertical-align: middle;
  margin-top: 13rem;
  margin-left: 40rem;

  color: var(--black);
  border: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: var(--w400);
    font-family: "NotoSansKR-Light";
    font-weight: 700;
  }
`;

const ResultBox = styled.div`
  width: 822rem;
  height: 106rem;
  background: var(--w200);
  margin-left: 115rem;
`;

const UserImage = styled.span`
  position: absolute;
  width: 63rem;
  height: 63rem;
  border-radius: 50%;
  vertical-align: middle;
  margin-left: 115rem;
  margin-top: 15rem;
`;

const UserName = styled.span`
  font-family: "NotoSansKR-Light";
  font-style: normal;
  font-weight: 700;
  font-size: 18rem;

  vertical-align: middle;
  position: absolute;
  margin-left: 220rem;
  margin-top: 38rem;
`;

const Follow = styled.span`
  position: absolute;
  vertical-align: middle;
  padding-left: 40rem;
  margin-left: 650rem;
  margin-top: 25rem;
  cursor: pointer;
`;

const NoneResult = styled.div`
  position: absolute;
  color: var(--b500);
  font-family: "NotoSansKR-Light";
  font-weight: 700;
  font-size: 16rem;

  margin-left: 120rem;
  margin-top: 40rem;
`;

function NoResult(props) {
  return (
    <ResultBox>
      <NoneResult>해당하는 사용자를 찾을 수 없습니다.</NoneResult>
    </ResultBox>
  );
}

function YesResult(friend) {
  const addFriend = (e) => {
    var uid = friend.uid;
    FriendService.addFriend(uid)
      .then((res) => {
        if (res.status == 200) {
          alert("친구가 추가되었습니다.");
        } else {
          alert("친구 추가에 실패했습니다.");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <ResultBox>
      <UserImage>
        <img src={friend.profileImageUrl} />
      </UserImage>
      <UserName>{friend.nickname}</UserName>
      <Follow>
        <img src={follow} onClick={addFriend} />
      </Follow>
    </ResultBox>
  );
}

function Search() {
  const [isModal, setIsModal] = useState(false);
  const [friendInfo, setFriendInfo] = useState(null);
  const [findSuccess, setFindSuccess] = useState(undefined);
  const ModalHandler = () => {
    setIsModal((prev) => !prev);
  };

  const [uid, setUid] = useState("");

  const searchFriendByUid = (uid) => {
    setUid(uid);
    FriendService.searchFriend(uid)
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          setFindSuccess(true);
          setFriendInfo(res.data);
        } else {
          console.log("search fail");
          setFindSuccess(false);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <View>
      <Container>
        <MenuText>친구 추가</MenuText>
      </Container>

      <SearchBar>
        <SearchIcon id="uid" type="submit">
          <img src={searchIcon} />
        </SearchIcon>
        <SearchText
          type="text"
          placeholder="UID 번호 검색하기"
          onChange={(e) => searchFriendByUid(e.target.value)}
          value={uid}
        />
      </SearchBar>

      {findSuccess == true ? (
        YesResult(friendInfo)
      ) : (
        <ResultBox>
          <NoneResult>해당하는 사용자를 찾을 수 없습니다.</NoneResult>
        </ResultBox>
      )}
    </View>
  );
}

export default Search;
