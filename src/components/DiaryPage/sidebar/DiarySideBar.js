import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ClockOnSVG from "../../../assets/clock.svg";
import ListOnSVG from "../../../assets/list.svg";
import ListOffSVG from "../../../assets/list-off.svg";
import ClockOffSVG from "../../../assets/clock-off.svg";
import Stickers from "../../../db/stickers.json";
import { addStickerToPanel } from "../../../modules/sticker";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 330rem;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 30px;
  width: 0px;
  visibility: hidden;

  ${({ sideBarType }) =>
    css`
      animation: 0.7s
        ${({ sideBarType }) => {
          console.log(sideBarType);
          if (sideBarType === null) return "showOut";
          else return "showUp";
        }}
        forwards;
    `}

  @keyframes showUp {
    0% {
      width: 0%;
    }

    100% {
      width: 330rem;

      visibility: visible;
    }
  }

  @keyframes showOut {
    0% {
    }

    100% {
      width: 0%;
      visibility: hidden; // 요소 속성 숨기기
    }
  }
`;

const Tab = styled.div`
  height: 70rem;
  display: flex;
  background-color: var(--w100);
`;
const ImgBox = styled.img.attrs(({ src, onClick, width, height }) => ({
  src: src,
  onClick: onClick,
}))`
  cursor: pointer;
  width: width;
  height: height;
  color: red;
`;

const ImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//스티커 목록
const StickerList = styled.div`
  flex: 1; // 탭바 제외한 나머지부분
  overflow: auto; // 스크롤 영역 생성
  display: flex;
  flex-wrap: wrap; // 넘치면 줄바꿈
`;

const StickerContainer = styled.div`
  width: 107rem;
  height: 107rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--w50);
  margin: 22rem;
`;

const Category = styled.div`
  width: 278rem;
  height: 48rem;
`;
function DiarySideBar({ sideBarType }) {
  // 0번 : 최근에 사용한 것, 1번 : 카테고리별 스티커 목록
  const [currentTab, setCurrentTab] = useState(0);
  const ditpatch = useDispatch();

  return (
    <Container sideBarType={sideBarType}>
      <Tab>
        <ImgWrapper>
          {currentTab == 0 ? (
            <ImgBox src={ClockOnSVG} width="24rem" height="24rem" />
          ) : (
            <ImgBox
              src={ClockOffSVG}
              width="24rem"
              height="24rem"
              onClick={() => setCurrentTab(0)}
            />
          )}
        </ImgWrapper>
        <ImgWrapper>
          {currentTab == 1 ? (
            <ImgBox src={ListOnSVG} width="24rem" height="24rem" />
          ) : (
            <ImgBox
              src={ListOffSVG}
              width="24rem"
              height="24rem"
              onClick={() => setCurrentTab(1)}
            />
          )}
        </ImgWrapper>
      </Tab>
      <StickerList>
        {Stickers.map((sticker) => {
          return (
            <StickerContainer>
              <ImgBox
                id={sticker.id}
                src={sticker.url}
                width="78rem"
                height="78rem"
                onClick={() =>
                  ditpatch(
                    addStickerToPanel({
                      id: sticker.id,
                      x: 100,
                      y: 100,
                      url: sticker.url,
                    })
                  )
                }
              />
            </StickerContainer>
          );
        })}
      </StickerList>
    </Container>
  );
}

export default DiarySideBar;
