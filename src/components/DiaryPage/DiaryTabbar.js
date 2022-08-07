import React, { useRef } from "react";
import styled from "styled-components";
import FileIcon from "../../assets/file.svg";
import TypeIcon from "../../assets/type.svg";
import ImageIcon from "../../assets/image.svg";
import PaperClipIcon from "../../assets/paperclip.svg";
import { addImageToPanel } from "../../modules/image";
import { useDispatch } from "react-redux";

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
  border-top: 1px solid var(--border);
`;

const BtnWrapper = styled.button.attrs(({ onClick }) => ({
  onClick: onClick,
}))`
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

export default function DiaryTabbar({ setsideBarType, setShowTextMenu }) {
  const ImgInput = React.useRef();
  const dispatch = useDispatch();
  const onImgUploadBtnClick = (event) => {
    //event.preventDefault();
    ImgInput.current.click();
  };

  return (
    <Wrapper>
      <BtnWrapper
        onClick={() => {setsideBarType((prev) => (prev ? null : "paper")); setShowTextMenu(false);}}
      >
        <ImgBox src={FileIcon} />
        <BtnName>속지</BtnName>
      </BtnWrapper>

      <BtnWrapper
        onClick={() => {
        setShowTextMenu(true);
      }}
     >     
        <ImgBox src={TypeIcon} />
        <BtnName>텍스트</BtnName>
      </BtnWrapper>

      <BtnWrapper
        onClick={() => {
          console.log("file click");
          onImgUploadBtnClick();
          setShowTextMenu(false);
        }}
      >
        <ImgBox src={ImageIcon} />
        <BtnName>사진</BtnName>
        <input
          ref={ImgInput}
          type="file"
          id="img"
          accept="image/*"
          name="file"
          style={{ display: "none" }}
          onChange={(e) => {
            const files = e.target.files;

            const reader = new FileReader();
            console.log(files[0]);
            reader.onload = () => {
              // 로드가 끝나면
              console.log(reader.result);

              dispatch(
                addImageToPanel({
                  id: files[0].name,
                  x: 100,
                  y: 100,

                  url: reader.result,
                })
              );
            };
            reader.readAsDataURL(files[0]);
          }}
        />
      </BtnWrapper>

      <BtnWrapper
        onClick={() => {setsideBarType((prev) => (prev ? null : "sticker")); setShowTextMenu(false);}}
      >
        <ImgBox src={PaperClipIcon} />
        <BtnName>스티커</BtnName>
      </BtnWrapper>
    </Wrapper>
  );
}
