import styled from "styled-components";

//크기만 지정
const Wrapper = styled.div`
  box-sizing: border-box;

  background-color: var(--background);
  border-radius: 30px;
  border: 1px solid var(--border);

  /** 기본 너비, 높이 지정 (반응형 X) */
  /*비율은 유지하면서 최대한 화면을 크게 만들기 */
  width: 1380rem;
  height: 905rem;

  margin: 30rem 60rem;
  /** 하위요소 absolute 속성값을 이용하기 위해 position: relative 로 설정 */
  position: relative;
  /* 그림자 효과 */
`;

export default Wrapper;
