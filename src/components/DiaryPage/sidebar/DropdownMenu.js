import React from "react";
import styled from "styled-components";
import { addStickerToPanel } from "../../../modules/sticker";
import { useDispatch } from "react-redux";

const CategoryMenu = styled.div.attrs(({ src, onClick }) => ({
  onClick: onClick,
}))`
  width: 278rem;
  height: 48rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ selected }) => (selected ? "white" : "var(--black)")};
  background-color: ${({ selected }) =>
    selected ? "var(--w400)" : "var(--w50)"};
  border: 1px solid var(--border);
  font-family: "NotoSansKR-Regular";
  font-size: 16rem;
  padding: 23rem;
  margin-top: 15rem;
  border-radius: 5px;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  width: 107em;
  height: 107rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--w50);
  margin: 25rem 10rem;
  border-radius: 5px;
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
//스티커 목록
const ListWrapper = styled.div`
  width: 100%;

  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; // 넘치면 줄바꿈
  align-self: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function DropdownMenu({
  children,
  selected,
  onClick,
  stickers,
}) {
  const dispatch = useDispatch();
  return (
    <Container>
      <CategoryMenu selected={selected} onClick={onClick}>
        {children}
      </CategoryMenu>
      <ListWrapper>
        {selected &&
          stickers.map((sticker) => {
            return (
              <ImgWrapper>
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
              </ImgWrapper>
            );
          })}
      </ListWrapper>
    </Container>
  );
}
