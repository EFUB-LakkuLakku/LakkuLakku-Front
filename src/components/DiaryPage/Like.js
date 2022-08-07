import styled from "styled-components";
import Heart from "../../assets/heart.svg";
import HeartFill from "../../assets/heart-fill.svg";
// 좋아요, 채팅 수 감싸는 컨테이너
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.img.attrs(({ src, alt, width, height }) => ({
  src: src,
  alt: alt,
}))`
  width: width;
  height: height;
  margin-right: 6px;
`;

// like : 해당 사용자가 좋아요 눌렀는지 아닌지
// like_cnt : 좋아요 횟수
export default function Like({ like, like_cnt }) {
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

  return (
    <Wrapper>
      {like === true ? (
        <ImgBox src={HeartFill} width={"24rem"} height={"24rem"} />
      ) : (
        <ImgBox src={Heart} width={"24rem"} height={"24rem"} />
      )}

      <Text>{like_cnt}개</Text>
    </Wrapper>
  );
}
