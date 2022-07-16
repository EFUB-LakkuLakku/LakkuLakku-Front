import styled from "styled-components";

const BackRectangle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--background);
  border-radius: 30px;
  border: 1px solid var(--border);

  width: 1380rem;
  height: 905rem;
  margin: 60rem 30rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default BackRectangle;
