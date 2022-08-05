import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ClockOnSVG from "../../../assets/clock.svg";
import ListOnSVG from "../../../assets/list.svg";
import ListOffSVG from "../../../assets/list-off.svg";
import ClockOffSVG from "../../../assets/clock-off.svg";
import Stickers from "../../../db/stickers.json";
import Papers from "../../../db/papers.json";
import { addStickerToPanel } from "../../../modules/sticker";
import { useDispatch } from "react-redux";
import DropdownMenu from "./DropdownMenu";
import PaperDropdownMenu from "./PaperDropdownMenu";
import API from "../../../utils/api";
import DiaryService from "../../../api/DiaryService";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 30px;
  width: 0;
  visibility: hidden;

  ${({ sideBarType }) =>
    css`
      animation: 0.7s
        ${({ sideBarType }) => {
          if (sideBarType === undefined) return "default";
          else if (sideBarType === null) return "showOut";
          else return "showUp";
        }}
        forwards;
    `}
  @keyframes default {
    0% {
      width: 0%;
    }

    100% {
      width: 0;
    }
  }

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
      width: 330rem;
    }

    100% {
      width: 0%;
      visibility: hidden; // 요소 속성 숨기기
    }
  }
`;

const Tab = styled.div`
  width: 100%;
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
  border-radius: 5px;
`;

//스티커 목록
const ListWrapper = styled.div`
  flex: 1; // 탭바 제외한 나머지부분
  overflow: auto; // 스크롤 영역 생성
  display: flex;
  flex-wrap: wrap; // 넘치면 줄바꿈
  justify-content: space-around;
`;

const StickerContainer = styled.div`
  width: 107rem;
  height: 107rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--w50);
  margin: 25rem;
`;

const PaperContainer = styled.div`
  width: 263rem;
  height: 133rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem;
`;

const CategoryContainer = styled.div`
  flex: 1; // 탭바 제외한 나머지부분
  width: 327rem; //330 - 스크롤바(5px)
  padding: 25rem;
  overflow: auto; // 스크롤 영역 생성
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CategoryText = styled.text`
  font-family: "NotoSansKR-Medium";
  font-style: normal;
  font-weight: 700;
  font-size: 16rem;
  line-height: 22rem;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
  align-self: flex-start;
  color: #000000;
`;

function DiarySideBar({ sideBarType, paper, setPaper }) {
  if (sideBarType === "sticker")
    return <StickerSideBar sideBarType={sideBarType} />;
  else if (sideBarType === "paper")
    return (
      <PaperSideBar
        sideBarType={sideBarType}
        paper={paper}
        setPaper={setPaper}
      />
    );
}

function StickerSideBar({ sideBarType }) {
  // 0번 : 최근에 사용한 것, 1번 : 카테고리별 스티커 목록
  const [currentTab, setCurrentTab] = useState(0);
  const dispatch = useDispatch();
  const categories = ["베이직", "큐트", "키치", "보테니컬"];
  const [Stickers, setStickers] = useState([]);
  const [categoryStickers, setCategoryStickers] = useState([]);
  const [categoryOpen, setCategoryOpen] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    DiaryService.getDiarySticker()
      .then((res) => {
        if (res.status == 200) setStickers(res.data);
      })
      .catch((err) => {
        console.log(err, "스티커를 가져오지 못했습니다.");
      });

    DiaryService.getCategoryDiarySticker()
      .then((res) => {
        if (res.status == 200) {
          setCategoryStickers(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err, "카테고리 스티커를 가져오지 못했습니다.");
      });
  }, []);

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

      {currentTab == 0 ? (
        <ListWrapper>
          {Stickers.map((sticker) => {
            return (
              <StickerContainer>
                <ImgBox
                  id={sticker.id}
                  src={sticker.url}
                  width="78rem"
                  height="78rem"
                  onClick={() =>
                    dispatch(
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
        </ListWrapper>
      ) : (
        <CategoryContainer>
          <CategoryText>테마</CategoryText>
          {categories.map((category, idx) => {
            return (
              <DropdownMenu
                selected={categoryOpen[idx]}
                onClick={() => {
                  //idx번째 dropdown 메뉴 toggle
                  setCategoryOpen((prev) => {
                    const new_state = [...prev];
                    new_state[idx] = !new_state[idx];
                    return new_state;
                  });
                }}
                stickers={Stickers}
              >
                {category}
              </DropdownMenu>
            );
          })}
        </CategoryContainer>
      )}
    </Container>
  );
}

function PaperSideBar({ sideBarType, paper, setPaper }) {
  // 0번 : 최근에 사용한 것, 1번 : 카테고리별 스티커 목록
  const [currentTab, setCurrentTab] = useState(0);
  const categories = ["베이직", "큐트", "키치", "보테니컬"];

  const [categoryOpen, setCategoryOpen] = useState([
    false,
    false,
    false,
    false,
  ]);

  //cors 이슈
  const [paperImgs, setPaperImgs] = useState([]); //추가

  useEffect(() => {
    API.get(`/api/v1/diaries/edit/templates`)
      .then((res) => setPaperImgs(res.data))
      .catch((err) => console.log(err));

    console.log(paperImgs.templateList);
  }); //api 연결

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

      {currentTab == 0 ? (
        <ListWrapper>
          {Papers.map((paperdata) => {
            return (
              <PaperContainer>
                <ImgBox
                  id={paperdata.id}
                  src={paperdata.url}
                  width="263rem"
                  height="133rem"
                  onClick={() =>
                    setPaper({
                      //캔버스 안의 속지 state!!
                      src: paperdata.url,
                      x: 0,
                      y: 0,
                      id: paperdata.id,
                    })
                  }
                />
              </PaperContainer>
            );
          })}
        </ListWrapper>
      ) : (
        <CategoryContainer>
          <CategoryText>테마</CategoryText>
          {categories.map((category, idx) => {
            return (
              <PaperDropdownMenu
                paper={paper}
                setPaper={setPaper}
                selected={categoryOpen[idx]}
                onClick={() => {
                  //idx번째 dropdown 메뉴 toggle
                  setCategoryOpen((prev) => {
                    const new_state = [...prev];
                    new_state[idx] = !new_state[idx];
                    return new_state;
                  });
                }}
                papers={Papers} //이거 때문에 papers.json의 url 고쳐야됨!!
              >
                {category}
              </PaperDropdownMenu>
            );
          })}
        </CategoryContainer>
      )}
    </Container>
  );
}

export default DiarySideBar;
