import React from "react";
import styled from "styled-components";
import FileIcon from "../../assets/file.svg";
import TypeIcon from "../../assets/type.svg";
import ImageIcon from "../../assets/image.svg";
import PaperClipIcon from "../../assets/paperclip.svg";
const Wrapper = styled.div`
  width: 100%;
  height: 85rem;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fffae7;
  justify-content: space-around;
`;

const BtnWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 132rem;
  height: 73rem;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  &:hover {
    background-color: #ffe898;
  }
`;

const BtnName = styled.text`
  font-family: "NotoSansKR-Medium";
  font-style: normal;
  font-weight: 500;
  line-height: 163.02%;
  letter-spacing: -0.05em;
  font-size: 20px;
`;

const ImgBox = styled.img.attrs(({ src }) => ({
  src: src,
}))`
  width: 24rem;
  height: 24rem;
`;

export default function DiaryTabbar() {
  return (
    <Wrapper>
      <BtnWrapper>
        <ImgBox src={FileIcon} />
        <BtnName>속지</BtnName>
      </BtnWrapper>

      <BtnWrapper>
        <ImgBox src={TypeIcon} />
        <BtnName>텍스트</BtnName>
      </BtnWrapper>

      <BtnWrapper>
        <ImgBox src={ImageIcon} />
        <BtnName>사진</BtnName>
      </BtnWrapper>

      <BtnWrapper>
        <ImgBox src={PaperClipIcon} />
        <BtnName>스티커</BtnName>
      </BtnWrapper>
    </Wrapper>
  );
}
