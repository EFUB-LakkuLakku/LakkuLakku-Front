import styled from "styled-components";
import ChatIcon from "../../assets/chat.svg";

// 좋아요, 채팅 수 감싸는 컨테이너
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.text`
  font-family: "NotoSansKR-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 14rem;
  line-height: 22rem;
  /* identical to box height, or 157% */

  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;

  /* 800 */

  color: var(--b800);
`;

const ImgBox = styled.img.attrs(({ src, alt, width, height }) => ({
  src: src,
  alt: alt,
}))`
  width: width;
  height: height;
  margin-right: 6px;
`;

export default function Chat({ cntComment }) {
  return (
    <Wrapper>
      <ImgBox src={ChatIcon} width={"24rem"} height={"24rem"} />
      <Text>{cntComment}개</Text>
    </Wrapper>
  );
}
