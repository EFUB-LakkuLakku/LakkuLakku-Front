import React, { useState } from "react";
import styled from "styled-components";
import searchIcon from "./search.png";

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
  margin-top: 25rem;
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

const SearchIcon = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-top: 20rem;
  margin-left: 40rem;
`;

const SearchText = styled.div`
  display: inline-block;
  font-family: "NotoSansKR-Medium";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 163.02%;

  vertical-align: middle;
  margin-top: 15rem;
  margin-left: 40rem;

  color: var(--400);
`;

function Search() {
  return (
    <View>
      <Container>
        <MenuText>친구 추가</MenuText>
      </Container>
      <SearchBar>
        <SearchIcon>
          <img src={searchIcon} />
        </SearchIcon>
        <SearchText>UID 번호 검색하기</SearchText>
      </SearchBar>
    </View>
  );
}
export default Search;
