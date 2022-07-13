import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;

  flex-direction: row;
  background-color: var(--background);
  border-radius: 30px;
  border: 1px solid var(--border);

  /** 기본 너비, 높이 지정 (반응형 X) */
  /*비율은 유지하면서 최대한 화면을 크게 만들기 */
  width: 1380rem;
  height: 905rem;
  margin: 15rem 30rem;
  /* 그림자 효과 */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default Wrapper;
