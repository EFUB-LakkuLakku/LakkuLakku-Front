import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  /** 하위요소 absolute 속성값을 이용하기 위해 position: relative 로 설정 */
  position: relative;
`;

export default Background;
